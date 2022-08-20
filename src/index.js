import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';
import {ThemeProvider} from "./context/themeContext"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
        <>
        <GlobalStyle/>
        <ThemeProvider>
        <App/>
        </ThemeProvider>
        </>
);


