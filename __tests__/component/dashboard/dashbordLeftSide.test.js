import React from 'react';
import { mount } from 'enzyme';
import DashbordLeftSide from '../../../src/component/dashboard/DashbordLeftSide';

const props = {
  handleModels: jest.fn(),
};

describe('test DashbordLeftSide component', () => {
  const wrapper = mount(
    <DashbordLeftSide {...props} />,
  );
  it('it should mound DashbordLeftSide', () => {
    wrapper.find('.dash-container--main-left--buttons-more--1').simulate('click');
    expect(wrapper.find('.dash-container--main-left--buttons-more--1').length).toBe(1);
  });
});
