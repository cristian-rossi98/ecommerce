import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cartReducer from "./cart/slice"
import userReducer from "./user/slice"

const store = configureStore({
  reducer: {
    cartReducer,
    userReducer,
  },
  middleware: [logger],
})

export default store;