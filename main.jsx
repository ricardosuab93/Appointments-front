import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import './src/index.css'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './src/Redux/index.js'

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)