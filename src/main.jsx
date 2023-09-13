import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TodosProvider } from './store/todos-context';
// import App from './App'
import './index.css';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />,
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'forgot-password',
        element: <ForgotPassword />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodosProvider>
            {/* <App /> */}
            <RouterProvider router={router} />
        </TodosProvider>
    </React.StrictMode>,
);
