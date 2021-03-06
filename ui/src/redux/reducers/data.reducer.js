const initialState = {
  allPostsData: [
    {
      text: "skeleton",
      createdBy: { name: "skeleton" },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "skeleton",
      createdBy: { name: "skeleton" },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "skeleton",
      createdBy: { name: "skeleton" },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "skeleton",
      createdBy: { name: "skeleton" },
      comments: [],
      likedBy: [],
      image: "random",
    },
    {
      text: "skeleton",
      createdBy: { name: "skeleton" },
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
    default:
      return state;
  }
};
