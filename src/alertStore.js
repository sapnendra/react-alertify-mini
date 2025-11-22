let listeners = [];
let alerts = [];

let alertCounter = 0;

export const addAlert = (type, message, duration = 2000) => {
  // Capture timestamp once to ensure consistency
  const now = Date.now();
  // Use counter + timestamp for unique IDs to ensure FIFO behavior
  const id = `${now}-${++alertCounter}`;
  // Store creation time for FIFO calculation - all alerts use same timestamp source
  const alert = { id, type, message, duration, createdAt: now };
  
  // Add immediately for instant feedback
  alerts.push(alert);
  // Notify all listeners synchronously for immediate UI update
  listeners.forEach((l) => l([...alerts]));
};

export const removeAlert = (id) => {
  alerts = alerts.filter((a) => a.id !== id);
  // Notify all listeners about the updated alerts array
  listeners.forEach((l) => l([...alerts]));
};

export const onAlertChange = (listener) => {
  listeners.push(listener);
  // Immediately notify with current alerts
  listener([...alerts]);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
