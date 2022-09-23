import {configureStore} from '@reduxjs/toolkit'
import bubblesReducer from './feutures/bubblesSlicer'
import {avatarApi} from "./feutures/avatarApi";



export const store = configureStore({
  reducer: {
    bubbles: bubblesReducer,
    [avatarApi.reducerPath]: avatarApi.reducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(avatarApi.middleware),
})
