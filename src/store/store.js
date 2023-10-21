import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth-slice'
import { todosReducer } from './todo/todos-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        todos: todosReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export { store }