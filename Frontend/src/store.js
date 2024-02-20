/* eslint-disable no-undef */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import {
  authReducer
} from "./reducers/authReducer";
import {
  hotelDetailsReducer,
  hotelReducer
} from "./reducers/hotelReducer";
import {
  bookingReducer
} from "./reducers/bookingReducer";

const preloadedState = {};

const store = configureStore({
    reducer: {
      authentication: authReducer,
      hotels: hotelReducer,
      hotelDetails: hotelDetailsReducer,
      bookings: bookingReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
  });


  export default store;