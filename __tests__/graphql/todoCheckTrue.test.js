import createToDoListMutation from '../../src/graphql/mutation/todo';


const createToDoList = createToDoListMutation();

jest.mock('@apollo/react-hooks', () => ({
  useMutation: jest.fn(() => ([jest.fn(async () => ({ data: 'hello' })), {}])),
}));
describe('test DashbordLeftSide component', () => {
  it('it should mound DashbordLeftSide', async () => {
    await createToDoList({});
  });
});
