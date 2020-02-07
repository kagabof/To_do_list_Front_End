import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation (
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $password: String!,
  $role: String,
  $age: Int,
  ) {
    CreateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role, age: $age){
      id
      firstName
      lastName
      email
      image_secure_url
    }
  }
`;

const USER_LOGIN = gql`
  query (
  $email: String!,
  $password: String!,
  ) {
    Signin(email: $email, password: $password,){
      token
    }
  }
`;

export { CREATE_USER, USER_LOGIN };
