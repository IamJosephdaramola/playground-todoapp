import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authenticated: false,
    user: null,
    loading: false,
    error: null
}



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSession: (state, action) => {
            state.user = action.payload.session?.user;
            state.authenticated = !!action.payload?.session?.access_token;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload.loading
        }
    },
})

const { setSession, setLoading } = authSlice.actions

const authReducer = authSlice.reducer;


export { authReducer, setSession, setLoading }