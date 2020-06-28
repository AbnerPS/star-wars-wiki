import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale='en'>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
)