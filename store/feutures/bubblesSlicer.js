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

// export const fetchData = createAsyncThunk('bubbles/getData', async (arg, { rejectWithValue }) => {
//   try {
//     const data = await axios
//         .post('http://34.123.173.148', {
//           sender: 'test_client',
//           query: 'Recklessness',
//         })
//         .then(function (response) {
//           console.log(response)
//         })
//         .catch(function (error) {
//           console.log(error)
//         })
//     // console.log(data)
//     // return data
//   } catch (error) {
//     rejectWithValue(error.response.data)
//   }
// })


export const bubblesSlice = createSlice({
  name: 'bubbles',
  initialState: {
    loaded: false,
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
