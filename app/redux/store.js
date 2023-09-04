import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cartReducer from "./cart/slice"
import userReducer from "./user/slice"
import langReducer from "./lang/slice"

const store = configureStore({
  reducer: {
    cartReducer,
    userReducer,
    langReducer,
  },
  // middleware: [logger],
})

export default store;