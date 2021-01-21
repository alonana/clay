import {createSlice} from '@reduxjs/toolkit'

export const reducer = createSlice({
  name: 'master',
  initialState: {
    maxStep: 2,
    stepId: 0,
    current: {
      size: 11,
      color: '#f4e9e9',
      shape: 'leaf',
    },
    cart: [],
  },
  reducers: {
    setStep: (state, action) => {
      state.stepId = action.payload
    },
    setSize: (state, action) => {
      state.current.size = action.payload
    },
    setColor: (state, action) => {
      state.current.color = action.payload
    },
    setShape: (state, action) => {
      state.current.shape = action.payload
    },
    addToCart: (state, action) => {
      state.cart.push({
        ...state.current,
      })
    },
  },
})

export const {
  setStep,
  setSize,
  setColor,
  setShape,
  addToCart,
} = reducer.actions

export const selectState = state => state.master

export default reducer.reducer
