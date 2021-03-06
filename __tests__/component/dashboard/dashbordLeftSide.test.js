import React from 'react';
import { mount } from 'enzyme';
import DashbordLeftSide from '../../../src/component/dashboard/DashbordLeftSide';

jest.mock('../../../src/component/dashboard/ToDoListDisplay.js', () => 'div');
jest.mock('@apollo/react-hooks', () => ({
  // useMutation: jest.fn(() => ([jest.fn(async () => ({ data: {}, errors: {} })), {}])),
  useQuery: jest.fn(() => ({
    data: {},
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

  it('it should mound DashbordLeftSide', (done) => {
    wrapper.find('.dash-container--main-left--buttons-more--2').simulate('click');
    expect(wrapper.find('.dash-container--main-left--buttons-more--1').length).toBe(1);
    done();
  });
});
