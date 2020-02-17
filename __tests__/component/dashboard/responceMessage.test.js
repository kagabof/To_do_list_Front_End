import React from 'react';
import { mount } from 'enzyme';
import ResponceMessage from '../../../src/component/dashboard/ResponceMessage';

describe('test DashbordLeftSide component', () => {
  it('it should mount ResponceMessage', () => {
    const props = {
      status: '',
      message: 'hekkk',
      type: '',
      close: jest.fn(),
    };
    const wrapper = mount(
      <ResponceMessage {...props} />,
    );
    expect(wrapper.find('img').length).toBe(2);
  });

  it('it should mount ResponceMessage', () => {
    const props = {
      status: 'up',
      message: 'hekkk',
      type: 'success',
      close: jest.fn(),
    };
    const wrapper = mount(
      <ResponceMessage {...props} />,
    );
    expect(wrapper.find('img').length).toBe(2);
  });
  it('it should mount ResponceMessage', () => {
    const props = {
      status: 'up',
      message: 'hekkk',
      type: 'worning',
      close: jest.fn(),
    };
    const wrapper = mount(
      <ResponceMessage {...props} />,
    );
    wrapper.find('img').at(1).simulate('click');
    expect(wrapper.find('img').length).toBe(2);
  });
});
