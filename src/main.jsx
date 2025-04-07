
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store  } from './Redux/Store.jsx'
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(

 
 <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter >
      <App />
      <ToastContainer />
      </BrowserRouter>
    </PersistGate>
 </Provider>,
)
