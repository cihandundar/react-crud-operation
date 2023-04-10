import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "../redux/userSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
