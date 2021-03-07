const initialState = {
  isAuthenticated: false,
  userId: null,
  userProfile: {},
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        isAuthenticated: payload.authentication,
        userId: payload.userId,
      };
      break;
    case "SET_USER_PROFILE":
      return { ...state, userProfile: { ...payload } };
    default:
      return state;
  }
};
