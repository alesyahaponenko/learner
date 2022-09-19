import {configureStore} from '@reduxjs/toolkit'
import bubblesReducer from './feutures/bubblesSlicer'



export const store = configureStore({
  reducer: {
    bubbles: bubblesReducer,
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})
