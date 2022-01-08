import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store.js'

import './index.css'
import App from './App'
export { default as Header } from './components/header/header.component'
// export { default as Footer } from './components/footer/footer'
// export { default as Header } from './components/header/header.component.jsx'
// export { default as Header } from './components/header/header.component.jsx'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,

  document.getElementById('root')
)
