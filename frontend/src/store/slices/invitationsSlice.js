import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const invitationsSlice = createSlice({
  name: 'invitations',
  initialState: null,
  reducers: {
    setInvitations: (state, action) => action.payload
  }
})

export const { setInvitations } = invitationsSlice.actions

export default invitationsSlice.reducer

export const getAllInvitations = () => (dispatch) => {
  const URL = `http://localhost:9000/api/v1/invitations`
  axios.get(URL, getConfig())
    .then(res => setInvitations(res.data))
    .catch(err => console.log(err))
}