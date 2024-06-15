import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "../reducers/passengerSlice";
import classReducer from "../reducers/classSlice";
import bookingReducer from "../reducers/bookingSlice";

export const store = configureStore({
  reducer: {
    passenger: passengerReducer,
    class: classReducer,
    booking: bookingReducer,
  },
});
