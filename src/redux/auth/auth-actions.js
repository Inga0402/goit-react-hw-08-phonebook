import { createAction } from "@reduxjs/toolkit";

const registrationRequest = createAction("auth/registerRequest");
const registrationSuccess = createAction("auth/registerSuccess");
const registrationError = createAction("auth/registerError");

const signInRequest = createAction("auth/signInRequest");
const signInSuccess = createAction("auth/signInSuccess");
const signInError = createAction("auth/signInError");

const signOutRequest = createAction("auth/signOutRequest");
const signOutSuccess = createAction("auth/signOutSuccess");
const signOutError = createAction("auth/signOutError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

const authActions = {
  registrationRequest,
  registrationSuccess,
  registrationError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};

export default authActions;
