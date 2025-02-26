import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/index.js'

createRoot(document.getElementById('root')).render(
    <PersistGate loading={null} persistor={persistor}>
  <Provider store={store}>

    <App />
  </Provider>

    </PersistGate>
  
)
