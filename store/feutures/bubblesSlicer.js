import { createSlice } from '@reduxjs/toolkit'

export const bubblesSlice = createSlice({
  name: 'bubbles',
  initialState: {
    query: "",
    isLoading: true,
    allowAnimation: true,
    audio: undefined,
    mouthAnimation: 0,
    bubblesAnimation: 0,
    send: true,
    mouseCoordinate: { x: 0, y: 0 },
    message: '',
  },

  reducers: {
    setQuery: (state, { payload }) => {
      return { ...state, query: payload }
    },
    allAnimationStop: (state) => {
      return { ...state, allowAnimation: false }
    },
    allAnimationStart: (state) => {
      return { ...state, allowAnimation: true }
    },
    sendStart: (state) => {
      return { ...state, send: true }
    },
    sendStop: (state) => {
      return { ...state, send: false }
    },
    startMouthAnimation: (state) => {
      return { ...state, mouthAnimation: 1 }
    },
    stopMouthAnimation: (state) => {
      return { ...state, mouthAnimation: 0 }
    },
    startBubblesAnimation: (state) => {
      return { ...state, bubblesAnimation: 1 }
    },
    setMouseCoordinate: (state, { payload }) => {
      return { ...state, mouseCoordinate: { x: payload.x, y: payload.y } }
    },
  },
})

export const {
  setQuery,
  allAnimationStop,
  allAnimationStart,
  sendStop,
  sendStart,
  startMouthAnimation,
  stopMouthAnimation,
  setMouseCoordinate,
  startBubblesAnimation,
} = bubblesSlice.actions

export default bubblesSlice.reducer
