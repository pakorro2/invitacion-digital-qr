import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlices'
import invitations from './slices/invitationsSlice'

const store = configureStore({
  reducer: {
    invitations,
    userReducer
  }
})
export default store