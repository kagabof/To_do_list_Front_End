import React from 'react';
import { mount } from 'enzyme';
import DashbordLeftSide from '../../../src/component/dashboard/DashbordLeftSide';

jest.mock('../../../src/component/dashboard/ToDoListDisplay.js', () => 'div');
jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(() => ({
    error: {},
    loading: {},
  })),
}));
const props = {
  handleModels: jest.fn(),
};

describe('test DashbordLeftSide component', () => {
  const wrapper = mount(
    <DashbordLeftSide {...props} />,
  );
  it('it should mound DashbordLeftSide', (done) => {
    wrapper.find('.dash-container--main-left--buttons-more--1').simulate('click');
    expect(wrapper.find('.dash-container--main-left--buttons-more--1').length).toBe(1);
    done();
  });
});
