import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppState/appSlice'

export default configureStore({
  reducer: {
    filter: appReducer,
  },
})