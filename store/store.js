import { configureStore } from '@reduxjs/toolkit'
import chatReducer from "../store/chatSlicer";


export const store = configureStore({
    reducer: {
        chat: chatReducer
    }
})