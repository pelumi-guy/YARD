import axiosInstance from "../services/apiService";
import {
    ALL_HOTELS_REQUEST,
    ALL_HOTELS_SUCCESS,
    ALL_HOTELS_FAIL,
    HOTEL_DETAILS_REQUEST,
    HOTEL_DETAILS_SUCCESS,
    HOTEL_DETAILS_FAIL,
    HOTEL_ROOMTYPES_REQUEST,
    HOTEL_ROOMTYPES_SUCCESS,
    HOTEL_ROOMTYPES_FAIL,
    CLEAR_DETAILS_ERRORS,
    CLEAR_HOTEL_ERRORS,

}   from "../reducers/hotelReducer";

export const getHotels = () => async (dispatch) => {
    try {
        // console.log('type of reducer.slice.actions: ', typeof(ALL_PRODUCTS_REQUEST.toString()));
        // console.log('ALL_PRODUCTS_REQUEST as string: ', ALL_PRODUCTS_REQUEST.toString());

        dispatch({ type: ALL_HOTELS_REQUEST })

        const { data } = await axiosInstance.get("api/Hotel/get-all-hotels");

        console.log({data});

        dispatch({
            type: ALL_HOTELS_SUCCESS,
            payload: data
        });

    } catch (err) {
        console.log('error message: ', err.response);

        dispatch({
            type: ALL_HOTELS_FAIL,
            payload: err.response
        })

    }
}

export const searchHotelsByName = (keyword) => async (dispatch) => {
    try {
        // console.log('type of reducer.slice.actions: ', typeof(ALL_PRODUCTS_REQUEST.toString()));
        // console.log('ALL_PRODUCTS_REQUEST as string: ', ALL_PRODUCTS_REQUEST.toString());

        dispatch({ type: ALL_HOTELS_REQUEST })

        const query = `api/Hotel/query-all-hotels?name=${keyword}`;

        const { data } = await axiosInstance.get(query);

        console.log({data});

        dispatch({
            type: ALL_HOTELS_SUCCESS,
            payload: data
        });

    } catch (err) {
        // console.log('error message: ', err.response.data.errMessage);

        dispatch({
            type: ALL_HOTELS_FAIL,
            payload: err.response.data.errMessage
        })

    }
}

export const searchHotelsByState = (keyword) => async (dispatch) => {
    try {
        // console.log('type of reducer.slice.actions: ', typeof(ALL_PRODUCTS_REQUEST.toString()));
        // console.log('ALL_PRODUCTS_REQUEST as string: ', ALL_PRODUCTS_REQUEST.toString());

        dispatch({ type: ALL_HOTELS_REQUEST })

        const query = `api/Hotel/query-all-hotels?state=${keyword}`;

        const { data } = await axiosInstance.get(query);

        console.log({data});

        dispatch({
            type: ALL_HOTELS_SUCCESS,
            payload: data
        });

    } catch (err) {
        // console.log('error message: ', err.response.data.errMessage);

        dispatch({
            type: ALL_HOTELS_FAIL,
            payload: err.response.data.errMessage
        })

    }
}

// Get hotel DETAILS
export const getHotelDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: HOTEL_DETAILS_REQUEST })

        const { data } = await axiosInstance.get(`/api/Hotel/${id}`);

        dispatch({
            type: HOTEL_DETAILS_SUCCESS,
            payload: data
        })

    } catch (err) {

        dispatch({
            type: HOTEL_DETAILS_FAIL,
            payload: err.response.data.errMessage
        })

    }
}

// Clear hotel details errors
export const clearDetailsErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_DETAILS_ERRORS
    })
}

export const getRoomTypes = (id) => async (dispatch) => {
    try {

        dispatch({ type: HOTEL_ROOMTYPES_REQUEST })

        const { data } = await axiosInstance.get(`/api/Hotel/${id}/roomtypes`);

        dispatch({
            type: HOTEL_ROOMTYPES_SUCCESS,
            payload: data
        })

    } catch (err) {

        dispatch({
            type: HOTEL_ROOMTYPES_FAIL,
            payload: err.response.data.errMessage
        })

    }
}

// Clear product errors
export const clearHotelErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_HOTEL_ERRORS
    })
}