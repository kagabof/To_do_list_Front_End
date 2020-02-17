import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import DashboardModels from '../../../src/component/dashboard/DashboardModels';


jest.mock('@apollo/react-hooks', () => ({
  useMutation: jest.fn(() => ([jest.fn(async () => ({ data: {}, errors: 'fdnshj' })), {}])),
}));

const props = {
  modelState: 'down',
  handleModels: jest.fn(),
  handleResponce: jest.fn(),
};

let container;
describe('test dashboard models', () => {
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
});
