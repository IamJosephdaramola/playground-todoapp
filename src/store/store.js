import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { todoReducer } from './todo/todo-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        todo: todoReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };
