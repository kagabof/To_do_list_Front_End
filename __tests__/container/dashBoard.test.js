import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../../src/container/Dashboard';


jest.doMock('../../src/component/dashboard/DashboardModels.js', () => <div />);
jest.mock('@apollo/react-hooks', () => ({
  useMutation: jest.fn(() => ([jest.fn(async () => ({ data: {}, errors: {} })), {}])),
}));
describe('test DashbordLeftSide component', () => {
  const wrapper = mount(
    <Dashboard />,
  );
  it('it should mound DashbordLeftSide', () => {
    wrapper.find('DashbordLeftSide')
      .find('.dash-container--main-left--buttons-more--1').simulate('click');
    expect(wrapper.find('DashbordLeftSide').length).toBe(1);
  });

  it('it should mound DashbordLeftSide', () => {
    wrapper.find('ResponceMessage')
      .find('.dash-container--message-close').simulate('click', { status: null });
    expect(wrapper.find('ResponceMessage').length).toBe(1);
  });
});
