import React from 'react';
import PropTypes from 'prop-types';

import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TaskListItem
          key={todo.id}
          id={todo.id}
          todo={todo.value}
          isDone={todo.done}
          onTodoClick={onTodoClick}
        />
      ))}
    </ul>
  );
};

const { arrayOf, object, func } = PropTypes;

TaskList.propTypes = {
  todos: arrayOf(object).isRequired,
  onTodoClick: func.isRequired,
};

export default TaskList;
