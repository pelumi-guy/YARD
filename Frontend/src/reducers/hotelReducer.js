import { createSlice } from '@reduxjs/toolkit';
import { objectMap } from '../utils/utilFunctions';

const hotelsRequest = (state, action) => {
    state.loading = true;
    state.hotels = [];
}

const hotelsFail = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const hotelsInitialState = { loading: true, hotels: [] };

const hotelSlice = createSlice({
    name: 'hotels',
    initialState: hotelsInitialState,
    reducers: {
        ALL_HOTELS_REQUEST(state, action) {
            hotelsRequest(state, action);
        },

        // ADMIN_HOTELS_REQUEST(state, action) {
        //     hotelsRequest(state, action);
        // },

        ALL_HOTELS_SUCCESS (state, action) {
            state.loading = false;
            state.hotels = action.payload;
            // state.hotelCount = action.payload.hotelCount
            // state.resPerPage = action.payload.resPerPage
            // state.filteredhotelsCount = action.payload.filteredhotelsCount
        },

        // ADMIN_HOTELS_SUCCESS (state, action) {
        //     state.loading = false;
        //     state.hotels = action.payload.hotel;
        // },

        ALL_HOTELS_FAIL (state, action) {
            hotelsFail(state, action);
        },

        // ADMIN_HOTELS_FAIL(state, action) {
        //     hotelsFail(state, action);
        // },

        CLEAR_HOTEL_ERRORS (state, action) {
            state.error = null;
        }
    }
})

const hotelTypes = objectMap(hotelSlice.actions, (action) => action.toString());

export const {
    ALL_HOTELS_REQUEST,
    ALL_HOTELS_SUCCESS,
    ALL_HOTELS_FAIL,
    // ADMIN_HOTELS_REQUEST,
    // ADMIN_HOTELS_SUCCESS,
    // ADMIN_HOTELS_FAIL,
    CLEAR_HOTEL_ERRORS
} = hotelTypes;

export const hotelReducer = hotelSlice.reducer;

// --- Hotel Details Reducer ---

const hotelDetailsInitialState = {
    loading: false,
    hotel: {},
    roomTypes: []
};

const hotelDetailsSlice = createSlice({
    name: 'hotelDetails',
    initialState: hotelDetailsInitialState,
    reducers: {

        HOTEL_DETAILS_REQUEST(state, action) {
            state.loading = true
        },

        HOTEL_ROOMTYPES_REQUEST(state, action) {
            state.loading = true
        },

        HOTEL_DETAILS_SUCCESS(state, action) {
            state.loading = false
            state.hotel = action.payload
        },

        HOTEL_ROOMTYPES_SUCCESS(state, action) {
            state.loading = false
            state.roomTypes = action.payload
        },

        HOTEL_DETAILS_FAIL(state, action) {
            state.error = action.payload
        },

        HOTEL_ROOMTYPES_FAIL(state, action) {
            state.error = action.payload
        },

        CLEAR_DETAILS_ERRORS (state, action) {
            state.error = null;
        }

    }
})

const hotelDetailsTypes = objectMap(hotelDetailsSlice.actions, (action) => action.toString());

export const {
    HOTEL_DETAILS_REQUEST,
    HOTEL_DETAILS_SUCCESS,
    HOTEL_DETAILS_FAIL,
    HOTEL_ROOMTYPES_REQUEST,
    HOTEL_ROOMTYPES_SUCCESS,
    HOTEL_ROOMTYPES_FAIL,
    CLEAR_DETAILS_ERRORS
} = hotelDetailsTypes;

export const hotelDetailsReducer = hotelDetailsSlice.reducer;