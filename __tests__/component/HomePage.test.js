import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import HomePage from '../../src/component/HomePage';

jest.mock('../../src/component/Signup.js', () => 'div');

describe('test home page', () => {
  it('to should find navbar', () => {
    const wrapper = mount(
      <MockedProvider>
        <HomePage />
      </MockedProvider>,
    );
    expect(wrapper.find('NavBar').length).toBe(1);
  });
});
