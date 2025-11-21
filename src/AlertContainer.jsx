import React, { useEffect, useState } from "react";
import { onAlertChange } from "./alertStore";

const colors = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800"
};

const AlertContainer = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAlertChange(setAlerts);
    return unsubscribe;
  }, []);

  return (
    <div style={styles.container}>
      {alerts.map((alert) => (
        <div
          key={alert.id}
          style={{ ...styles.alertBox, backgroundColor: colors[alert.type] }}
        >
          {alert.message}
        </div>
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
    gap: "10px"
  },
  alertBox: {
    padding: "10px 16px",
    color: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    minWidth: "200px",
    fontSize: "14px"
  }
};

export default AlertContainer;

