import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import Login from '../../src/component/home/Login';


jest.mock('react-router-dom', () => ({ useHistory: jest.fn(() => ({ push: jest.fn() })) }));

jest.mock('@apollo/react-hooks', () => ({
  useLazyQuery: jest.fn(() => ([jest.fn(), {
    data: {
      Signin: {
        token: 'jagfeg',
      },
    },
    error: {},
  }])),
  useQuery: jest.fn(() => ({
    data: {
      Signin: {
        token: 'fqkjhbndsfbh',
      },
    },
    loading: { loadingAllRoom: false },
    error: { graphQLErrors: [{ message: 'error' }] },
  })),
}),
);

describe('test home page', () => {
  const wrapper = mount(
    <MockedProvider>
      <Login />
    </MockedProvider>,
  );

  it('to should Signup with data', () => {
    wrapper.find('HomeInput').at(0).find('input').simulate('change', {
      target: {
        value: 'faustinkagabo@gmail.com',
        name: 'email',
      },
    });
    wrapper.find('HomeInput').at(1).find('input').simulate('change', { target: { value: 'Dede199@', name: 'password' } });
    wrapper.find('.signup-form--button').at(0).simulate('mousedown');
    wrapper.find('.signup-form--button').at(0).simulate('click');
  });
});
