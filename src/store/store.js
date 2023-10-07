import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth-slice'

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export { store }