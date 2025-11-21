import { useState } from 'react'
import { alert } from 'react-alertify-mini'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleSuccess = () => {
    alert.success('Operation completed successfully! 🎉')
  }

  const handleError = () => {
    alert.error('Something went wrong! Please try again.')
  }

  const handleWarning = () => {
    alert.warning('Please check your input before proceeding.')
  }

  const handleCustomMessage = () => {
    if (inputValue.trim()) {
      alert.success(`Custom message: ${inputValue}`)
      setInputValue('')
    } else {
      alert.warning('Please enter a message first!')
    }
  }

  const handleAsyncOperation = async () => {
    alert.success('Starting async operation...')
    
    // Simulate async operation
    setTimeout(() => {
      const success = Math.random() > 0.3
      if (success) {
        alert.success('Async operation completed!')
      } else {
        alert.error('Async operation failed!')
      }
    }, 1500)
  }

  const handleMultipleAlerts = () => {
    alert.success('First alert')
    setTimeout(() => alert.warning('Second alert'), 300)
    setTimeout(() => alert.error('Third alert'), 600)
    setTimeout(() => alert.success('Fourth alert'), 900)
  }

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>🚀 React Alertify Mini Test</h1>
          <p>Test the alert notification library</p>
        </header>

        <div className="test-section">
          <h2>Basic Alerts</h2>
          <div className="button-group">
            <button onClick={handleSuccess} className="btn btn-success">
              Show Success Alert
            </button>
            <button onClick={handleError} className="btn btn-error">
              Show Error Alert
            </button>
            <button onClick={handleWarning} className="btn btn-warning">
              Show Warning Alert
            </button>
          </div>
        </div>

        <div className="test-section">
          <h2>Custom Message</h2>
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a custom message..."
              className="input"
              onKeyPress={(e) => e.key === 'Enter' && handleCustomMessage()}
            />
            <button onClick={handleCustomMessage} className="btn btn-primary">
              Show Custom Alert
            </button>
          </div>
        </div>

        <div className="test-section">
          <h2>Async Operations</h2>
          <button onClick={handleAsyncOperation} className="btn btn-primary">
            Simulate Async Operation
          </button>
          <p className="description">
            This will show an initial success alert, then after 1.5 seconds show either success or error
          </p>
        </div>

        <div className="test-section">
          <h2>Multiple Alerts</h2>
          <button onClick={handleMultipleAlerts} className="btn btn-primary">
            Trigger Multiple Alerts
          </button>
          <p className="description">
            This will trigger 4 alerts in quick succession to test stacking
          </p>
        </div>

        <div className="test-section">
          <h2>Test Scenarios</h2>
          <div className="scenario-group">
            <div className="scenario">
              <h3>Form Validation</h3>
              <button
                onClick={() => alert.warning('Please fill in all required fields')}
                className="btn btn-warning"
              >
                Simulate Validation Error
              </button>
            </div>
            <div className="scenario">
              <h3>API Success</h3>
              <button
                onClick={() => alert.success('Data saved to server successfully!')}
                className="btn btn-success"
              >
                Simulate API Success
              </button>
            </div>
            <div className="scenario">
              <h3>Network Error</h3>
              <button
                onClick={() => alert.error('Network request failed. Please check your connection.')}
                className="btn btn-error"
              >
                Simulate Network Error
              </button>
            </div>
          </div>
        </div>

        <footer>
          <p>All alerts auto-dismiss after 2 seconds</p>
          <p>Alerts appear at the top-right corner</p>
        </footer>
      </div>
    </div>
  )
}

export default App

