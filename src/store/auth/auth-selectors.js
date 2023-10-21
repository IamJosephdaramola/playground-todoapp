const getUser = (state) => state.auth.user;
const getAuthenticated = (state) => state.auth.authenticated;
const getIsAuthLoading = (state) => state.auth.loading;

export { getAuthenticated, getIsAuthLoading, getUser }