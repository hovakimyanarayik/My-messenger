import { AuthState } from './../../types/authTypes';
import { createSlice } from "@reduxjs/toolkit";


const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
    initialized: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUser: (state, action) => {
            state.user = action.payload
        },
        startLoading: (state) => {
            state.isLoading = true
            state.error = null
        },
        endLoading: (state) => {
            state.isLoading = false
        },
        setError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        setInitialized: (state) => {
            state.initialized = true
        }
    }
})

export const { changeUser, startLoading, endLoading, setError, setInitialized } = authSlice.actions

export default authSlice.reducer