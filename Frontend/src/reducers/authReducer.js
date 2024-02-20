import { createSlice } from "@reduxjs/toolkit";
import { objectMap } from "../utils/utilFunctions";

const auth_request = (state, action) => {
  state.loading = true;
  state.isAuthenticated = false;
  state.user = null;
};

const auth_success = (state, action) => {
  state.loading = false;
  state.isAuthenticated = true;
  state.user = action.payload;
};

const auth_fail = (state, action) => {
  state.loading = false;
  state.isAuthenticated = false;
  state.user = null;
  state.error = action.payload;
};

const userInitialState = {
  user: null,
  isAuthenticated: false,
  loading: true
};

const authSlice = createSlice({
  name: "auth",
  initialState: userInitialState,
  reducers: {
    LOGIN_REQUEST(state, action) {
      auth_request(state, action);
    },

    REGISTER_USER_REQUEST(state, action) {
      auth_request(state, action);
    },

    LOAD_USER_REQUEST(state, action) {
      auth_request(state, action);
    },

    LOGIN_SUCCESS(state, action) {
      auth_success(state, action);
    },

    LOGOUT_SUCCESS(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },

    REGISTER_USER_SUCCESS(state, action) {
      auth_success(state, action);
    },

    LOAD_USER_SUCCESS(state, action) {
      auth_success(state, action);
    },

    LOGIN_FAIL(state, action) {
      auth_fail(state, action);
    },

    REGISTER_USER_FAIL(state, action) {
      auth_fail(state, action);
    },

    LOAD_USER_FAIL(state, action) {
      auth_fail(state, action);
    },

    RELOAD_USER_FAIL(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },

    LOGOUT_FAIL(state, action) {
      state.error = action.payload;
    },

    CLEAR_AUTH_ERRORS(state, action) {
      state.error = null;
    },
  },
});

const authTypes = objectMap(authSlice.actions, (action) => action.toString());

export const {
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
  } = authTypes;

  export const authReducer = authSlice.reducer;
