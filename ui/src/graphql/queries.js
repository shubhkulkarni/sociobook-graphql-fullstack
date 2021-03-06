import { gql } from "@apollo/client";
const fetchAllPosts = gql`
  {
    posts {
      _id
      text
      image
      createdAt
      createdBy {
        name
        _id
      }
      likedBy {
        name
        _id
      }
      createdAt
      comments {
        text
      }
    }
  }
`;

export { fetchAllPosts };
