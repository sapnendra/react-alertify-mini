import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AlertContainer } from 'react-alertify-mini'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertContainer />
    <App />
  </React.StrictMode>,
)

