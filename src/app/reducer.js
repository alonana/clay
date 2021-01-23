import {createSlice} from '@reduxjs/toolkit'

function loadState() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return initialState()
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return initialState()
  }
}

function initialState() {
  return {
    maxStep: 2,
    stepId: 0,
    current: {
      size: 11,
      color: '#f4e9e9',
      shape: 'leaf',
      itemId: 0,
    },
    cart: [],
  }
}

export const reducer = createSlice({
  name: 'master',
  initialState: loadState(),
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
    removeFromCart: (state, action) => {
      const newCart = []
      state.cart.forEach(item => {
        if (item.itemId !== action.payload.itemId) {
          newCart.push(item)
        }
      })
      state.cart = newCart
    },
    addToCart: (state, action) => {
      let maxId = 0
      state.cart.forEach(item => {
        if (item.itemId >= maxId) {
          maxId = item.itemId + 1
        }
      })
      const newItem = {
        ...state.current,
        itemId: maxId,
      }
      state.cart.push(newItem)
    },
    makeOrder: (state, action) => {
      localStorage.setItem('state', JSON.stringify(state))

      const items = state.cart.map((item) => {
        return `shape%3d${item.shape}+color%3d${item.color.replace('#', '%23')}+size%3d${item.size}`
      })

      const value = items.join('%0A')
      window.location = `https://docs.google.com/forms/d/e/1FAIpQLSdhEdJOfoU6_SJpo0wZU4kYk8INIewP39-p0BQaPillgTLLsw/viewform?usp=pp_url&entry.814117078=${value}`
    },
  },
})

export const {
  setStep,
  setSize,
  setColor,
  setShape,
  removeFromCart,
  addToCart,
  makeOrder,
} = reducer.actions

export const selectState = state => state.master

export default reducer.reducer
