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

export default CREATE_USER;
