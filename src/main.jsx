import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { TodosProvider, AuthProvider } from './store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <AuthProvider>
            <TodosProvider>
                <App />
                </TodosProvider>
            </AuthProvider>
        </React.StrictMode>
    </BrowserRouter>,
);
