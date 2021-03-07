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
        profileImage
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

const getUserInfo = gql`
  query getUser($userId: String!) {
    user(userId: $userId) {
      name
      email
      profileImage
      city
      birthDate
      profession
      posts {
        text
        image
        createdAt
      }
      followers {
        name
        _id
      }
      following {
        name
        _id
      }
    }
  }
`;

const getAllUsers = gql`
{
  users{
    name,email,profileImage,_id
  }
}`
export { fetchAllPosts, getUserInfo,getAllUsers };
