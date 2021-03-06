const initialState = {
  isAuthenticated: false,
  userId: null,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        isAuthenticated: payload.authentication,
        userId: payload.userId,
      };
    default:
      return state;
  }
};
