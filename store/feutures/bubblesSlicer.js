import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk('bubbles/getData', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.get('/api/data')
    return data
  } catch (error) {
    rejectWithValue(error.response.data)
  }
})

export const bubblesSlice = createSlice({
  name: 'bubbles',
  initialState: {
    loaded: false,
    startManAnimation: 0,
    moveBubblesToStartPositions: 0,
    mouseCoordinate: { x: 0, y: 0 },
    predictions: [],
    message: '',
  },

  reducers: {
    starMouthtAnimation: (state) => {
      return { ...state, startManAnimation: 1 }
    },
    stopMouthtAnimation: (state) => {
      return { ...state, startManAnimation: 0 }
    },
    setMouseCoordinate: (state, { payload }) => {
      return { ...state, mouseCoordinate: { x: payload.x, y: payload.y } }
    },
    startMoveBubblesToStartPositions: (state, { payload }) => {
      return { ...state, moveBubblesToStartPositions: 1 }
    },
    stopMoveBubblesToStartPositions: (state, { payload }) => {
      return { ...state, moveBubblesToStartPositions: 0 }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, { payload }) => {
      state.loaded = false
    })
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.loaded = true
      state.predictions = payload.data.predictions
    })
    builder.addCase(fetchData.rejected, (state, { payload }) => {
      state.message = payload
      state.loaded = false
    })
  },
})

export const { starMouthtAnimation, stopMouthtAnimation, setMouseCoordinate, startMoveBubblesToStartPositions, stopMoveBubblesToStartPositions } = bubblesSlice.actions

export default bubblesSlice.reducer
