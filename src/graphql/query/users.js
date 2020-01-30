import { gql } from 'apollo-boost';

const GET_ALL_USERS = gql`
query {
  Users{
    id
    firstName
    age
    email
    createdAt
    toDoList{
      id
      type
      title
      toDo{
        title
        id
        description
        location
      }
    }
  }
}`;
export default GET_ALL_USERS;
