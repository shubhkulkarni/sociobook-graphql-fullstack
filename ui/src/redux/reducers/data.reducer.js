const initialState = {
  allUsers: [],
  searchInput: "",
  allPostsData: [
    {
      text: "Loading...",
      createdBy: { name: "Loading..." },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "Loading...",
      createdBy: { name: "Loading..." },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "Loading...",
      createdBy: { name: "Loading..." },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "Loading...",
      createdBy: { name: "Loading..." },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "Loading...",
      createdBy: { name: "Loading..." },
      comments: [],
      likedBy: [],
      image: "random",
    },
  ],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_STORIES_DATA":
      return {
        ...state,
        allPostsData: [...payload],
      };
      break;
    case "SET_ALL_USERS":
      return { ...state, allUsers: [...payload] };
    case "SET_SEARCH":
      return { ...state, searchInput: payload };
    default:
      return state;
  }
};
