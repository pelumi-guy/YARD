import axiosInstance from "../services/apiService";

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    RELOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_AUTH_ERRORS,
} from "../reducers/authReducer";

// Login request
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined) {
            console.log('old token', token);
            localStorage.removeItem('token');
        }

        const { data } = await axiosInstance.post( '/Login', { email, password }, config);

        console.log('New token:', data.data.token);
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('email', data.data.user.email);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data.user
        })

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.errMessage
        })
    }
}

// Logout user
export const logout = () => async (dispatch) => {
    try {

        // await axiosInstance.get('/logout');

        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined) {
            console.log('old token', token);
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        }

        dispatch({
            type: LOGOUT_SUCCESS
        })

    } catch (err) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: err.response.data.errMessage
        })
    }
}

// Load user on reload
export const reloadUser = () => async (dispatch) => {
    try {

        dispatch({ type: LOAD_USER_REQUEST });

        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        const email = localStorage.getItem('email');
        if (email === null || email === undefined) {
          throw new Error("No email saved");
        }

        const { data } = await axiosInstance.post('/GetUser', email, config);
        console.log("reload data:", data);

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.data
        })

    } catch (err) {
        dispatch({
            type: RELOAD_USER_FAIL,
        })
    }
}

// Register user
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                // 'content-type': 'multipart/form-data'
                'content-type': 'application/json'
            }
        }

        const { data } = await axiosInstance.post('/register', userData, config);
        console.log({ registration: data});

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.data.user
        })

    } catch (err) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data.errMessage
        })
    }
}

// Change password
export const changePassword = (userData) => async (dispatch) => {
    try {
        // dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                // 'content-type': 'multipart/form-data'
                'content-type': 'application/json'
            }
        }
        console.log("before api call:", userData);
        const { data } = await axiosInstance.post('/change-password', userData, config);
        console.log({ updatePassword: data});

        // dispatch({
        //     type: REGISTER_USER_SUCCESS,
        //     payload: data.data.user
        // })

    } catch (err) {
        console.log(err);
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data.errMessage
        })
    }
}