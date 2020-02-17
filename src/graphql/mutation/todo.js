import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';


export const CREATE_TO_DO_LIST = gql`
  mutation CreateToDoList($type: String!, $title: String!) {
    CreateToDoList(type: $type, title: $title){
        type
        title
        id
    }
  }
`;


export default () => {
  const [createToDoList] = useMutation(CREATE_TO_DO_LIST);

  const mutate = async ({ variables = {} }) => {
    try {
      const { data: { CreateToDoList = {} } = {}, errors } = await createToDoList({ variables });
      if (errors) throw new Error(errors);
      return {
        data: CreateToDoList,
        error: errors,
      };
    } catch (error) {
      return { error };
    }
  };
  return mutate;
};
