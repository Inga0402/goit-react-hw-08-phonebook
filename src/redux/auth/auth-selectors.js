const getIsSignIn = (state) => state.auth.isSignedIn;
const getUsername = (state) => state.auth.user.name;
const getUserEmail = (state) => state.auth.user.email;
const getToken = (state) => state.auth.token;
const getIsAuthLoading = (state) => state.auth.isAuthLoading;
const getErrorMessage = (state) => state.auth.error;

const authSelectors = {
  getIsSignIn,
  getUsername,
  getUserEmail,
  getToken,
  getIsAuthLoading,
  getErrorMessage,
};

export default authSelectors;
