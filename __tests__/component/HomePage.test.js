import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../../src/component/HomePage';


describe('test home page', () => {
  it('to should find navbar', () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.find('NavBar').length).toBe(1);
  });
});
