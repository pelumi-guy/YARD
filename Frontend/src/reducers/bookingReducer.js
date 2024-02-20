import { createReducer, createSlice } from "@reduxjs/toolkit";
import { objectMap } from "../utils/utilFunctions";

const initialState = {
  bookingInfo: localStorage.getItem("bookingInfo")
    ? JSON.parse(localStorage.getItem("bookingInfo"))
    : [],
    total: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      const item = action.payload;


      const isItemExist = state.bookingInfo.find(
        (i) => i.room === item.room
      );

      if (isItemExist) {
        state.bookingInfo = state.bookingInfo.map((i) =>
          i.room === isItemExist.room ? item : i
        );
      } else {
        state.bookingInfo = [...state.bookingInfo, item];
      }

      let total = state.bookingInfo.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
      }, 0);

    //   total *= state.dates.endDate - state.dates.startDate;

    state.total = total;

    },

    REMOVE_CART_ITEM(state, action) {
      state.bookingInfo = state.bookingInfo.filter(
        (i) => i.room !== action.payload
      );
    },

    EMPTY_CART(state, action) {
      state.bookingInfo = []
    },

    // SAVE_SHIPPING_INFO(state, action) {
    //   state.shippingInfo = action.payload;
    // },
  },
});

const bookingTypes = objectMap(bookingSlice.actions, (action) => action.toString());

export const {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    EMPTY_CART,
    // SAVE_SHIPPING_INFO,
} = bookingTypes;

export const bookingReducer = bookingSlice.reducer;