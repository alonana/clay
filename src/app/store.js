import {configureStore} from '@reduxjs/toolkit'
import master from './reducer'

export default configureStore({
  reducer: {
    master,
  },
})
