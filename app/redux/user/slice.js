import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  userName: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.logged = true;
      state.userName = action.payload;
    },
    logout: (state) => {
      state.logged = false;
      state.userName = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;