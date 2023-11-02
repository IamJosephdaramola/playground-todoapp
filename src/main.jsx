import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';
import { getSession } from './store/auth/auth-thunks';
import App from './App';
import './index.css';

store.dispatch(getSession());

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Provider store={store}>
                {/* <TodosProvider> */}
                <App />
                {/* </TodosProvider> */}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
