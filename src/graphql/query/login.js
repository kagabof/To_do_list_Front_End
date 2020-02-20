import gql from 'graphql-tag';


const USER_LOGIN = gql`
  query (
  $email: String!,
  $password: String!,
  ) {
    Signin(email: $email, password: $password,){
      token
      id
      firstName
    }
  }
`;


export default USER_LOGIN;
