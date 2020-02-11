import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../src/App';

jest.mock('../src/container/Dashboard.js', () => 'div');
jest.doMock('../src/container/HomePage.js', () => <div />);
jest.mock('../src/component/home/Signup.js', () => 'div');
jest.mock('../src/component/home/Login.js', () => 'div');
describe('test App', () => {
  it('should test route home', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={['/', '/signup', '/login', '/dashboard', { pathname: '/' }]}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find('Route').props().location.pathname).toBe('/');
  });
  it('should test route signup', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={['/', '/signup', '/login', '/dashboard', { pathname: '/' }]}
        initialIndex={1}
      >
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find('Route').props().location.pathname).toBe('/signup');
  });
  it('should test rout login', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={['/login']}
        initialIndex={1}
      >
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find('Route').props().location.pathname).toBe('/login');
  });
});
