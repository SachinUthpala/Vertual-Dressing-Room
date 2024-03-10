import { configureStore } from '@reduxjs/toolkit'

import userReducer from './Users/UserSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
  },
})

