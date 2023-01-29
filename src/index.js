import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import App from './App';
import "./index.css"
import Items from './pages/Items';
import QA from './pages/QA';
import UserSlice from './redux/UserSlice';
import GlobalStyle from './styles/GlobalStyle';

const store = configureStore({
    reducer:{
        users:UserSlice
    }
})


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <BrowserRouter>
    <GlobalStyle/>
     <App/>
    </BrowserRouter>
  
)

