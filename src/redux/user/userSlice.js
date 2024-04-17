import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error:false
}

const userSlice = createSlice({
  name: "User",
  initialState,
    reducers: {
      
  }
});

export const {} = userSlice.actions

export default userSlice.reducer