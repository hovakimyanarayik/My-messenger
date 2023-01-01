import { CurrentChatState } from './../../types/userTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CurrentChatState = {
    user: null,
    isLoading: true,
    error: null
}

const currentChatSlice = createSlice({
    name: 'currentChat',
    initialState,
    reducers: {
        startLoading: state => {
            state.isLoading = true
            state.user = null
        },
        endLoading: state => {
            state.isLoading = false
        },
        changeUser: (state, action) => {
            state.user = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})


export const { changeUser, endLoading, setError, startLoading } = currentChatSlice.actions

export default currentChatSlice.reducer