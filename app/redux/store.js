import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cartReducer from "./cart/slice"

const store = configureStore({
  reducer: {
    cartReducer,
  },
  middleware: [logger],
})

export default store;