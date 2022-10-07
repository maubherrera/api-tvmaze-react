import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//states
import ShowsState from './context/shows/ShowsState';
import AlertsState from "./context/alerts/AlertsState"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShowsState>
    <AlertsState>
      <App />
    </AlertsState>
  </ShowsState>
)
