import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import App from './App'
import { UserProvider } from './context/UserContext'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
