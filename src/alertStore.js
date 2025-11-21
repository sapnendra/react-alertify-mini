let listeners = [];
let alerts = [];

export const addAlert = (type, message) => {
  const id = Date.now();
  alerts.push({ id, type, message });

  listeners.forEach((l) => l(alerts));

  setTimeout(() => {
    alerts = alerts.filter((a) => a.id !== id);
    listeners.forEach((l) => l(alerts));
  }, 2000); // remove after 2 seconds
};

export const onAlertChange = (listener) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
