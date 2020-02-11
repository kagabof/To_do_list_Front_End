import createToDoListMutation from '../../src/graphql/mutation/todo';


const createToDoList = createToDoListMutation();

jest.mock('@apollo/react-hooks', () => ({
  useMutation: jest.fn(() => ([jest.fn(async () => ({ errors: {} })), {}])),
}));
describe('test DashbordLeftSide component', () => {
  it('it should mound DashbordLeftSide', async () => {
    await createToDoList({});
  });
});
