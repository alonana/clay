import {createSlice} from '@reduxjs/toolkit'

export const reducer = createSlice({
  name: 'master',
  initialState: {
    maxStep: 1,
    stepId: 0,
    size: 11,
    color: "green",
  },
  reducers: {
    setStep: (state, action) => {
      state.stepId = action.payload
    },
    setSize: (state, action) => {
      state.size = action.payload
    },
    setColor: (state, action) => {
      state.color = action.payload
    },
  },
})

export const {
  setStep,
  setSize,
  setColor,
} = reducer.actions

export const selectState = state => state.master

export default reducer.reducer
