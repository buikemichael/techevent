import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../utilities/event/eventSlice";

export const store = configureStore({
  reducer: {
    event: eventReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
