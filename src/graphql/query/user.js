import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';


const GET_USER = gql`
  query User($id: ID!){
  User(id: $id){
    id
    age
    email
    role
    createdAt
    toDoList{
      id
      type
      title
      description
      toDo{
        id
        title
        description
        location
      }
    }
    
  }
}
`;


export default GET_USER;
// (variables = {}) => {
//   const { data, loading, error } = useQuery(GET_USER, { variables });
//   return {
//     data,
//     loading,
//     error,
//   };
// };
