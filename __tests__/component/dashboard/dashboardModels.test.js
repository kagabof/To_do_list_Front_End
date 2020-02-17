import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import DashboardModels from '../../../src/component/dashboard/DashboardModels';


jest.mock('@apollo/react-hooks', () => ({
  useMutation: jest.fn(() => ([jest.fn(async () => ({ data: {} })), {}])),
}));

const props = {
  modelState: 'down',
  handleModels: jest.fn(),
  handleResponce: jest.fn(),
};

let container;
describe('test dashboard models', () => {
  const wrapper = mount(
    <DashboardModels {...props} />,
  );

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('to should write the to do list title', (done) => {
    act(() => {
      ReactDOM.render(<DashboardModels {...props} />, container);
    });
    const button = container.querySelector('.dash-container--models-create-todo--button');
    act(() => {
      const input = container.querySelector('input');
      Simulate.change(
        input,
        { target: { value: 'jkhwefg', name: 'todoListTitle' } },
      );
    });
    act(() => {
      act(() => {
        Simulate.click(button, {});
      });
    });

    done();
  });
  it('should close the model', () => {
    wrapper.find('img').simulate('click');
    expect(wrapper.find('img').props().alt).toBe('closeIcon');
  });
  it('should close the model', () => {
    const newProps = {
      modelState: 'up',
      handleModels: jest.fn(),
      handleResponce: jest.fn(),
    };
    const newWrapper = mount(
      <DashboardModels {...newProps} />,
    );
    wrapper.find('img').simulate('click');
    expect(newWrapper.find('img').props().alt).toBe('closeIcon');
  });

  it('should close the modle when submited', () => {
    const newProps = {
      modelState: 'up',
      handleModels: jest.fn(),
      handleResponce: jest.fn(),
    };
    const newWrapper = mount(
      <DashboardModels {...newProps} />,
    );
    wrapper.find('.dash-container--models-create-todo--button').simulate('click');
    expect(newWrapper.find('img').props().alt).toBe('closeIcon');
  });
});
