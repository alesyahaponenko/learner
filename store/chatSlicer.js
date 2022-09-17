import {createSlice} from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        startManAnimation: 0
    },

    reducers: {
         updateScreen: (state, action) => {
             //return {...state, screen: screens[action.payload].name}
         },
    }
})

export const {
     updateScreen,
} = chatSlice.actions

export default chatSlice.reducer


