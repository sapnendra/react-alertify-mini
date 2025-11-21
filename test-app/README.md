# React Alertify Mini - Test App

This is a test application to verify that the `react-alertify-mini` package works correctly.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Test Features

The test app includes:

- ✅ Basic alert types (success, error, warning)
- ✅ Custom message input
- ✅ Async operation simulation
- ✅ Multiple alerts stacking
- ✅ Form validation scenarios
- ✅ API success/error scenarios

## What to Test

1. **Basic Alerts**: Click the three main buttons to test each alert type
2. **Custom Messages**: Enter a message and click "Show Custom Alert"
3. **Async Operations**: Test alerts in async scenarios
4. **Multiple Alerts**: Trigger multiple alerts to test stacking behavior
5. **Real-world Scenarios**: Test form validation, API calls, and network errors

All alerts should:
- Appear at the top-right corner
- Auto-dismiss after 2 seconds
- Stack vertically when multiple alerts are shown
- Display with appropriate colors (green, red, orange)

