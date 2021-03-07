export const setAuth = (payload) => ({ type: "SET_AUTH", payload });

export const setUserProfile = (payload) => ({
  type: "SET_USER_PROFILE",
  payload,
});

export const setUsersList = (payload) => ({
  type: "SET_ALL_USERS",
  payload,
});

export const setSearch = payload =>({
type:'SET_SEARCH',payload
})