import React, { useEffect, useState, useRef } from "react";
import { onAlertChange, removeAlert } from "./alertStore";

const colors = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800"
};

const DEFAULT_DURATION = 2000;

const AlertItem = ({ alert, onRemove }) => {
  const duration = alert.duration || DEFAULT_DURATION;
  // Use creation time for FIFO - calculate elapsed time from when alert was created
  // This ensures alerts expire in the order they were added
  const createdAt = alert.createdAt || Date.now();
  const initialElapsed = Date.now() - createdAt;
  const initialProgress = Math.max(0, Math.min(100, 100 - (initialElapsed / duration) * 100));
  
  const [progress, setProgress] = useState(initialProgress);
  const [isVisible, setIsVisible] = useState(false);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeoutRef = useRef(null);
  const isRemovingRef = useRef(false);

  useEffect(() => {
    // Trigger immediate visibility with animation for instant feedback
    setIsVisible(true);

    // Use creation time for FIFO - calculate elapsed time from when alert was created
    // This ensures alerts expire in the order they were added
    startTimeRef.current = createdAt;

    const updateProgress = () => {
      if (isRemovingRef.current) return;
      
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);

      if (remaining > 0) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        // Mark as removing to prevent multiple calls
        isRemovingRef.current = true;
        // Start exit animation
        setIsVisible(false);
        // Wait for exit animation before removing from store
        timeoutRef.current = setTimeout(() => {
          onRemove(alert.id);
        }, 300);
      }
    };

    // Start progress animation immediately
    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [alert.id, alert.duration, alert.createdAt, onRemove]);

  return (
    <div
      style={{
        ...styles.alertBox,
        backgroundColor: colors[alert.type],
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(100%)",
        transition: "opacity 0.3s ease, transform 0.3s ease"
      }}
    >
      <div style={styles.message}>{alert.message}</div>
      <div style={styles.progressBarContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`,
            transition: "width 0.1s linear"
          }}
        />
      </div>
    </div>
  );
};

const AlertContainer = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAlertChange(setAlerts);
    return unsubscribe;
  }, []);

  const handleRemove = (id) => {
    // Remove from store's array and notify all listeners
    removeAlert(id);
  };

  return (
    <div style={styles.container}>
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} onRemove={handleRemove} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    pointerEvents: "none"
  },
  alertBox: {
    padding: "12px 16px",
    color: "#fff",
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    minWidth: "250px",
    fontSize: "14px",
    pointerEvents: "auto",
    position: "relative",
    overflow: "hidden"
  },
  message: {
    position: "relative",
    zIndex: 1
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    overflow: "hidden"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    transition: "width 0.1s linear"
  }
};

export default AlertContainer;

