import React from 'react';
import { mount } from 'enzyme';
import DashbordRightSide from '../../../src/component/dashboard/DashbordRightSide';

describe('test DashbordLeftSide component', () => {
  const wrapper = mount(
    <DashbordRightSide />,
  );
  it('it should mound DashbordLeftSide', () => {
    expect(wrapper.find('.dash-container--main-right--title').length).toBe(1);
  });
});
