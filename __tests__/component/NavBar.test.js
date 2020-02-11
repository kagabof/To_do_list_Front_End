import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import NavBar from '../../src/component/home/NavBar';

document.body.innerHTML = '<div id="signup"></div> ';

describe('test nav bar', () => {
  it('should click home', () => {
    const props = {
      navLink: 'home',
    };
    const wrapper = mount(
      <MemoryRouter>
        <NavBar {...props} />
      </MemoryRouter>,
    );
    expect(wrapper.find('NavLink').at(0).props().name).toBe('home');
  });
  it('should click signup', () => {
    const props = {
      navLink: 'signup',
    };
    const wrapper = mount(
      <MemoryRouter>
        <NavBar {...props} />
      </MemoryRouter>,
    );
    expect(wrapper.find('NavLink').at(1).props().name).toBe('signup');
  });
  it('should click login', () => {
    const props = {
      navLink: 'login',
    };
    const wrapper = mount(
      <MemoryRouter>
        <NavBar {...props} />
      </MemoryRouter>,
    );
    expect(wrapper.find('NavLink').at(2).props().name).toBe('login');
  });
});
