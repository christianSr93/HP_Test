import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppState/appSlice'
import charReducer from './AppState/characterSlice'

export default configureStore({
  reducer: {
    filter: appReducer,
    characters: charReducer
  },
})