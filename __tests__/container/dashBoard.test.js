import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../../src/container/Dashboard';


// jest.doMock('../../src/component/dashboard/DashboardModels.js', () => <div />);
jest.mock('../../src/component/dashboard/DashbordLeftSide.js', () => 'div');
jest.mock('@apollo/react-hooks', () => ({
  // useQuery: jest.fn(async () => ({
  //   data: {
  //     User: {},
  //   },
  // })),
  useMutation: jest.fn(() => ([jest.fn(async () => ({ data: {}, errors: {} })), {}])),
}));
describe('test DashbordLeftSide component', () => {
  const wrapper = mount(
    <Dashboard />,
  );
  // it('it should mound DashbordLeftSide', (done) => {
  //   wrapper.find('DashbordLeftSide')
  //     .find('.dash-container--main-left--buttons-more--1').simulate('click');
  //   expect(wrapper.find('DashbordLeftSide').length).toBe(1);
  //   done();
  // });

  it('it should mound DashbordLeftSide', (done) => {
    wrapper.find('ResponceMessage')
      .find('.dash-container--message-close').simulate('click', { status: null });
    expect(wrapper.find('ResponceMessage').length).toBe(1);
    done();
  });

  it('it should handle the DashbordLeftSide models', (done) => {
    wrapper.find('DashboardModels').props().handleModels('jfbdhv', 'eygfr');
    expect(wrapper.find('DashboardModels').length).toBe(1);
    done();
  });
});
