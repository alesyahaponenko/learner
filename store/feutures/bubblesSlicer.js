import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// export const fetchData = createAsyncThunk('bubbles/getData', async (arg, { rejectWithValue }) => {
//   try {
//     const data = await axios.get('/api/data')
//     return data
//   } catch (error) {
//     rejectWithValue(error.response.data)
//   }
// })
export const fetchData = createAsyncThunk(
  'bubbles/getData',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        //'https://frozen-stream-26546.herokuapp.com/http://34.123.173.148',
        'http://34.123.173.148',
        {
          sender: 'test_client',
          query: 'Recklessness',
        }
      )
      return response
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
)

export const bubblesSlice = createSlice({
  name: 'bubbles',
  initialState: {
    loaded: false,
    audio: undefined,
    startManAnimation: 0,
    startBubblesAnimation: 0,
    moveBubblesToStartPositions: 1,
    mouseCoordinate: { x: 0, y: 0 },
    predictions: [],
    message: '',
  },

  reducers: {
    startMouthAnimation: (state) => {
      return { ...state, startManAnimation: 1 }
    },
    stopMouthAnimation: (state) => {
      return { ...state, startManAnimation: 0 }
    },
    startBubblesMoves: (state) => {
      return { ...state, startBubblesAnimation: 1 }
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
      state.audio = payload.data.predictions[0].audio.gcp_audio_filename
    })
    builder.addCase(fetchData.rejected, (state, { payload }) => {
      state.message = payload
      state.loaded = false
    })
  },
})

export const {
  startMouthAnimation,
  stopMouthAnimation,
  setMouseCoordinate,
  startMoveBubblesToStartPositions,
  stopMoveBubblesToStartPositions,
  startBubblesMoves,
} = bubblesSlice.actions

export default bubblesSlice.reducer
