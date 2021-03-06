import { gql } from "@apollo/client";

const loginMutation = gql`
  mutation loginHandler($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      accessToken
    }
  }
`;

const signupMutation = gql`
mutation signupHandler($name:String!,$email:String!,$confirmPassword:String!,$password:String!,){
  signup(name:$name,email:$email,password:$password,confirmPassword:$confirmPassword){
    accessToken
  }
}`

export { loginMutation,signupMutation };
