import React from 'react';
import { mount } from 'enzyme';
import HomeInput from '../../src/component/HomeInput';

const props = {
  handelChange: jest.fn(),
  validation: false,
  name: 'name',
  placeholder: 'name',
  errorMessage: 'error',
  type: 'text',
};

describe('test home page', () => {
  const wrapper = mount(
    <HomeInput {...props} />,
  );

  it('to should Signup with data', () => {
    expect(wrapper.props().validation).toBe(false);
  });
});
