import React from 'react';
import { mount } from 'enzyme';
import NavBar from '../../src/component/NavBar';

document.body.innerHTML = '<div id="signup"></div> ';

describe('test nav bar', () => {
  const wrapper = mount(<NavBar />);

  it('should click signup', () => {
    wrapper
      .find('NavLink')
      .at(1)
      .simulate('click');
    expect(wrapper
      .find('NavLink')
      .at(1)
      .props()
      .className)
      .toBe('nav-link-active');
  });
  it('should click login', () => {
    wrapper
      .find('NavLink')
      .at(2)
      .simulate('click');
    expect(wrapper
      .find('NavLink')
      .at(2).props()
      .className)
      .toBe('nav-link-active');
  });
});
