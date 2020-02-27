import React from 'react';
import { mount } from 'enzyme';
import ToDoListDisplay from '../../../src/component/dashboard/ToDoListDisplay';

describe('test DisplayToDoList component', () => {
  it('to should DisplayToDoList component', () => {
    const props = {
      toDoLists: [{ title: 'khwfer', toDo: [] }, { toDo: [] }, { title: 'khwfer', toDo: [] }],
      loading: false,
    };
    const wrapper = mount(
      <ToDoListDisplay {...props} />,
    );
    expect(wrapper.find('DisplayToDoList').length).toBe(1);
  });

  it('should find DisplayToDoList when loading component', () => {
    const props = {
      toDoLists: [{ title: 'khwfer', toDo: [] }, { toDo: [] }, { title: 'khwfer', toDo: [] }],
      loading: true,
    };
    const wrapper = mount(
      <ToDoListDisplay {...props} />,
    );
    expect(wrapper.find('DisplayToDoList').length).toBe(1);
  });

  it('should find DisplayToDoList when no toDoLists component', () => {
    const props = {
      toDoLists: [],
      loading: false,
    };
    const wrapper = mount(
      <ToDoListDisplay {...props} />,
    );
    expect(wrapper.find('DisplayToDoList').length).toBe(1);
  });
});
