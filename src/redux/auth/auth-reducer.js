import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth-actions";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isSignedIn: false,
  error: null,
  isAuthLoading: false,
};

const user = createReducer(initialState.user, {
  [authActions.registrationSuccess]: (_, { payload }) => payload.user,
  [authActions.signInSuccess]: (_, { payload }) => payload.user,
  [authActions.signOutSuccess]: () => initialState.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(initialState.token, {
  [authActions.registrationSuccess]: (_, { payload }) => payload.token,
  [authActions.signInSuccess]: (_, { payload }) => payload.token,
  [authActions.signOutSuccess]: () => null,
});

const isAuthLoading = createReducer(initialState.isAuthLoading, {
  [authActions.registrationRequest]: () => true,
  [authActions.registrationSuccess]: () => false,
  [authActions.registrationError]: () => false,
  [authActions.signInRequest]: () => true,
  [authActions.signInSuccess]: () => false,
  [authActions.signInError]: () => false,
  [authActions.signOutRequest]: () => true,
  [authActions.signOutSuccess]: () => false,
  [authActions.signOutError]: () => false,
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(initialState.error, {
  [authActions.registrationError]: setError,
  [authActions.signInError]: setError,
  [authActions.signOutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isSignedIn = createReducer(initialState.isSignedIn, {
  [authActions.registrationSuccess]: () => true,
  [authActions.signInSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registrationError]: () => false,
  [authActions.signInError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.signOutSuccess]: () => false,
});
export default combineReducers({
  user,
  token,
  isSignedIn,
  error,
  isAuthLoading,
});
