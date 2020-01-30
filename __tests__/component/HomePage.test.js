import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../../src/component/HomePage';


describe('test home page', () => {
  it('try it', () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.find('div').length).toBe(1);
  });
});
