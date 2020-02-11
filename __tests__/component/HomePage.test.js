import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import HomePage from '../../src/container/HomePage';
import setWithExpiry from '../../src/helpers/setWithExpiry';


jest.mock('../../src/component/home/Signup.js', () => 'div');
jest.mock('../../src/component/home/Login.js', () => 'div');

describe('test home page', () => {
  it('should find  with home', () => {
    const wrapper = mount(
      <MockedProvider>
        <MemoryRouter>
          <HomePage navLink="home" />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(wrapper.find('NavBar').length).toBe(1);
  });

  it('should find navbar with signup', () => {
    const wrapper = mount(
      <MockedProvider>
        <MemoryRouter>
          <HomePage navLink="signup" />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(wrapper.find('NavBar').length).toBe(1);
  });

  it('should find navbar with login', () => {
    const wrapper = mount(
      <MockedProvider>
        <MemoryRouter>
          <HomePage navLink="login" />
        </MemoryRouter>
      </MockedProvider>,
    );
    expect(wrapper.find('NavBar').length).toBe(1);
  });

  it('it should set localStorage', () => {
    expect(setWithExpiry('hhh', 'hegwirirv', null)).toBe(undefined);
  });
});
