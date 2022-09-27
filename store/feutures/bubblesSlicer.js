import { createSlice } from '@reduxjs/toolkit'

export const bubblesSlice = createSlice({
  name: 'bubbles',
  initialState: {
    chatQuery: '',
    isReady: false,
    allowAnimation: true,
    audio: undefined,
    mouthAnimation: 0,
    bubblesAnimation: 0,
    send: true,
    predictions: [],
    mouseCoordinate: { x: 0, y: 0 },
    message: '',
    isBubbleClick: 0,
  },

  reducers: {
    sendLoading: (state, { payload }) => {
      return { ...state, isReady: payload }
    },
    sendPredictions: (state, { payload }) => {
      return { ...state, predictions: payload }
    },
    setChatQuery: (state, { payload }) => {
      return { ...state, chatQuery: payload }
    },
    allAnimationStop: (state) => {
      return { ...state, allowAnimation: false }
    },
    allAnimationStart: (state) => {
      return { ...state, allowAnimation: true }
    },
    sendBtnStart: (state) => {
      return { ...state, send: true }
    },
    sendBtnStop: (state) => {
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
    setIsBubbleClick: (state, { payload }) => {
      return { ...state, isBubbleClick: payload }
    },
  },
})

export const {
  sendLoading,
  sendPredictions,
  setChatQuery,
  allAnimationStop,
  allAnimationStart,
  sendBtnStart,
  sendBtnStop,
  startMouthAnimation,
  stopMouthAnimation,
  setMouseCoordinate,
  startBubblesAnimation,
  setIsBubbleClick,
} = bubblesSlice.actions

export default bubblesSlice.reducer
