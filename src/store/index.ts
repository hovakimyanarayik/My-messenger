import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import currentChatReducer from "./slices/currentChatSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        currentChat: currentChatReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store