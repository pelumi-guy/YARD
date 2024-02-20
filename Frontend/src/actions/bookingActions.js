import axios from 'axios';

import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    EMPTY_CART,
    // SAVE_SHIPPING_INFO
} from '../reducers/bookingReducer';

// const api_prefix = '/api/v1';

export const addBooking = (booking, quantity) => async (dispatch, getState) =>{

    // const { data } = await axios.get(`/api/Hotel/${id}/roomtypes`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            ...booking,
            quantity
        }
    })

    localStorage.setItem('bookings', JSON.stringify(getState().bookings.bookingInfo));
}

export const removeBooking = (id) => async (dispatch, getState) => {

    dispatch({ type: REMOVE_CART_ITEM, payload: id });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const emptyBookings = () => async (dispatch, getState) => {

    dispatch({ type: EMPTY_CART });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    // sessionStorage.removeItem('orderInfo');
}

// export const saveShippingInfo = (data) => async (dispatch) => {

//     dispatch({ type: SAVE_SHIPPING_INFO, payload: data});

//     localStorage.setItem('shippingInfo', JSON.stringify(data));
// }