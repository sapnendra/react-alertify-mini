# React Alertify Mini

A lightweight, zero-dependency React notification/alert library with a simple API. Display success, error, and warning alerts that automatically appear at the top-right of your screen and dismiss after 2 seconds.

---

## ✨ Features

- 🎯 **Simple API**: `alert.success()`, `alert.error()`, `alert.warning()`
- ⏱️ **Auto-dismiss**: Alerts automatically disappear after 2 seconds
- ⚡ **Instant appearance**: Alerts appear immediately with optimized timing
- 🌐 **Global alerts**: Works anywhere in your app after setup
- 🪶 **Lightweight**: No external dependencies (only React)
- 📦 **TypeScript support**: Includes TypeScript definitions
- 🎨 **Clean design**: Modern, minimal UI with smooth slide-in/out animations
- 🔧 **Easy integration**: Just add one component to your root
- 🔄 **FIFO removal**: Alerts remove one by one in first-in-first-out order

---

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install react-alertify-mini
```

or

```bash
yarn add react-alertify-mini
```

---

## 🚀 Quick Start

### Step 1: Add AlertContainer to your root component

Import and add the `AlertContainer` component **once** at the root of your React application.

**For React 18+ (using createRoot):**

```jsx
// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AlertContainer } from "react-alertify-mini";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AlertContainer />
    <App />
  </>
);
```

**For React 17 (using render):**

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AlertContainer } from "react-alertify-mini";

ReactDOM.render(
  <>
    <AlertContainer />
    <App />
  </>,
  document.getElementById("root")
);
```

### Step 2: Use alerts anywhere in your app

Import the `alert` object and call its methods from any component:

```jsx
import { alert } from "react-alertify-mini";

function MyComponent() {
  const handleSave = () => {
    // Your save logic here
    alert.success("Data saved successfully!");
  };

  const handleError = () => {
    alert.error("Something went wrong!");
  };

  const handleWarning = () => {
    alert.warning("Please check your input!");
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleWarning}>Show Warning</button>
    </div>
  );
}
```

---

## 📖 Usage Examples

### Basic Usage

```jsx
import { alert } from "react-alertify-mini";

function App() {
  return (
    <div>
      <button onClick={() => alert.success("Operation completed!")}>
        Success
      </button>
      
      <button onClick={() => alert.error("Failed to process request")}>
        Error
      </button>
      
      <button onClick={() => alert.warning("Please review your data")}>
        Warning
      </button>
    </div>
  );
}
```

### With Async Operations

```jsx
import { alert } from "react-alertify-mini";

async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    alert.success("Data loaded successfully!");
    return data;
  } catch (error) {
    alert.error("Failed to load data");
    console.error(error);
  }
}
```

### With Form Validation

```jsx
import { alert } from "react-alertify-mini";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert.warning("Please fill in all fields");
      return;
    }

    // Login logic
    alert.success("Login successful!");
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## 📚 API Reference

### `alert.success(message: string)`

Displays a green success alert.

```jsx
alert.success("Operation completed successfully!");
```

### `alert.error(message: string)`

Displays a red error alert.

```jsx
alert.error("An error occurred!");
```

### `alert.warning(message: string)`

Displays an orange/yellow warning alert.

```jsx
alert.warning("Please check your input!");
```

### `AlertContainer`

React component that renders the alert container. Must be added once at the root of your application.

```jsx
import { AlertContainer } from "react-alertify-mini";

// Add to your root component
<AlertContainer />
```

---

## 🎨 Alert Appearance

- **Position**: Top-right corner of the screen
- **Auto-dismiss**: 2 seconds after appearing (configurable)
- **Progress bar**: Visual countdown bar at the bottom of each alert
- **Animations**: Smooth slide-in from right and fade-out transitions
- **Colors**:
  - ✅ Success: Green (`#4caf50`)
  - ❌ Error: Red (`#f44336`)
  - ⚠️ Warning: Orange (`#ff9800`)
- **Styling**: White text, rounded corners, subtle shadow
- **Stacking**: Multiple alerts stack vertically with spacing
- **Removal**: Alerts remove independently in FIFO (first-in-first-out) order

---

## 📁 Package Structure

```
src/
├── AlertContainer.jsx    # React component for rendering alerts
├── alertStore.js         # Alert state management
├── index.js              # Main entry point (exports)
└── index.d.ts            # TypeScript definitions
```

---

## 🔧 TypeScript Support

This package includes TypeScript definitions. If you're using TypeScript, you'll get full type support:

```typescript
import { alert, AlertContainer } from "react-alertify-mini";

// TypeScript will provide autocomplete and type checking
alert.success("Typed message"); // ✅
alert.error(123); // ❌ Type error: expects string
```

---

## ⚙️ Requirements

- **React**: >= 17.0.0
- **React DOM**: >= 17.0.0

These are peer dependencies, so make sure you have them installed in your project.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/feature branch name`)
5. Open a Pull Request

---

## 📝 License

MIT License © 2025 Sapnendra Jaiswal

---

## 🔗 Links

- **Repository**: [https://github.com/sapnendra/react-alertify](https://github.com/sapnendra/react-alertify)
- **Issues**: [https://github.com/sapnendra/react-alertify/issues](https://github.com/sapnendra/react-alertify/issues)
- **NPM Package**: [react-alertify-mini](https://www.npmjs.com/package/react-alertify-mini)

---

## 💡 Tips

- Only add `<AlertContainer />` once at your app root
- Alerts automatically stack if multiple are triggered quickly
- Each alert has a unique ID and manages its own lifecycle independently
- The progress bar provides visual feedback on remaining time
- Alerts appear instantly when triggered for optimal user experience
- The alert container is positioned with `z-index: 9999` to appear above most content
- Alerts remove themselves one by one in the order they were created (FIFO)

---

Made with ❤️ by Sapnendra Jaiswal
