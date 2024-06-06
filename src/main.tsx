import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-router-dom';
import store from '../redux/Store.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <App/>
    </Provider>
)


