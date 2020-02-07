import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import Signup from '../../src/component/Signup';
import { integerValidation, stringValidation } from '../../src/component/validation';


jest.mock('react-router-dom', () => ({ useHistory: jest.fn(() => ({ push: jest.fn() })) }));
jest.mock('@apollo/react-hooks', () => ({
  useMutation: jest.fn(() => ([jest.fn(), {
    data: {
      CreateUser: {
        id: 1,
        firstName: 'ekjrv',
        lastName: 'ewjhg',
        email: 'fwkjerh@gmail.com',
        image_secure_url: 'fhegr',
      },
    },
    loading: false,
    error: { graphQLErrors: [{ message: 'error' }] },
  }])),
}));

describe('test home page', () => {
  const wrapper = mount(
    <MockedProvider>
      <Signup />
    </MockedProvider>,
  );

  it('to should Signup with data', (done) => {
    wrapper.find('HomeInput').at(0).find('input').simulate('change', { target: { value: 'kagabo', name: 'firstName' } });
    wrapper.find('HomeInput').at(1).find('input').simulate('change', { target: { value: 'faustin', name: 'lastName' } });
    wrapper.find('HomeInput').at(2).find('input').simulate('change', { target: { value: 'faustinkagabo@gmail.com', name: 'email' } });
    wrapper.find('HomeInput').at(3).find('input').simulate('change', { target: { value: 'Dede199@', name: 'password' } });
    wrapper.find('HomeInput').at(4).find('input').simulate('change', { target: { value: 'Dede199@', name: 'rePassword' } });
    wrapper.find('.signup-form--button').at(0).simulate('mousedown');
    wrapper.find('.signup-form--button').at(0).simulate('click');
    expect(wrapper.find('HomeInput').at(4).find('input').props().name).toBe('rePassword');
    done();
  });

  it('should return false when no argument', () => {
    expect(stringValidation()).toBe(false);
  });

  it('should return true with a number as an argument', () => {
    expect(integerValidation(12)).toBe(true);
  });
});
