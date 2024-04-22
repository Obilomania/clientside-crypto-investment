import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isLoggedin: false,
  userRole:""
}

const userSlice = createSlice({
  name: "User",
  initialState,
    reducers: {
      current_signed_in_user: (state, action) => {
        state.currentUser = action.payload;
      },
      current_user_login_status: (state, action) => {
        state.isLoggedin = action.payload;
      },
      user_role: (state, action) => {
        state.userRole = action.payload;
      }
  }
});



export const {current_signed_in_user, current_user_login_status, user_role} = userSlice.actions

export default userSlice.reducer