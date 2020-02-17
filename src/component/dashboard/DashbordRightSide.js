import React from 'react';
import TodoCard from './TodoCard';


const ToDoCard = () => (
  <div className="dash-container--main-right">
    <div className="dash-container--main-right--title">
      All to-do
    </div>
    <div className="dash-container--main-right-dd">
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>

  </div>
);

export default ToDoCard;
