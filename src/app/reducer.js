import {createSlice} from '@reduxjs/toolkit'

export const reducer = createSlice({
  name: 'master',
  initialState: {
    maxStep: 2,
    stepId: 0,
    size: 11,
    color: '#f4e9e9',
    shape: 'leaf',
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
    setShape: (state, action) => {
      state.shape = action.payload
    },
  },
})

export const {
  setStep,
  setSize,
  setColor,
  setShape,
} = reducer.actions

export const selectState = state => state.master

export default reducer.reducer
