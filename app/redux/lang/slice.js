import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  lang: 'pt',
}

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;