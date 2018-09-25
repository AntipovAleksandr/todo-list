import React, { Component } from 'react';

import { TaskBar, TaskList, FilterBar } from '../components';

import guid from '../helpers/guid';

export default class App extends Component {
  state = {
    value: '',
    // добавил новое значение в стейт, чтобы отслеживать текущий тип фильтра
    filter: 'all',
    todos: [],
    filterTodos: [],
  };

  onChangeTodo = ({ target }) => {
    const { value } = target;
    this.setState(() => ({ value }));
  };

  onAddTodo = () => {
    const todo = {
      id: guid(),
      value: this.state.value,
      done: false,
    };

    // NOTE: ВНИМАНИЕ!!! добавил как видите проверку по типу
    // и в случае если тип фильтра done обновляем только массив
    // todos, в остальных случаях обновляем и массив filterTodos

    if (this.state.filter === 'done') {
      this.setState(prevState => ({
        todos: [...prevState.todos, todo],
        value: '',
      }));
    } else {
      this.setState(prevState => ({
        todos: [...prevState.todos, todo],
        filterTodos: [...prevState.filterTodos, todo],
        value: '',
      }));
    }
  };

  onTodoClick = id => {
    const filterTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true,
        };
      }
      return todo;
    });

    this.setState(() => ({ filterTodos, todos: filterTodos }));
  };

  filterTodos = type => {
    let filterTodos = [];
    let filter = '';
    if (type.toLowerCase() === 'all') {
      filterTodos = this.state.todos;
      filter = 'all';
    } else if (type.toLowerCase() === 'done') {
      filterTodos = this.state.todos.filter(todo => todo.done);
      filter = 'done';
    } else {
      filterTodos = this.state.todos.filter(todo => !todo.done);
      filter = 'process';
    }
    // каждый раз когда жмем на любой из фильтров,
    // записываем новое значение фильтра в стейт
    this.setState(() => ({ filterTodos, filter }));
  };

  render() {
    const { filterTodos, value } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <FilterBar filterTodos={this.filterTodos} />
        <TaskBar value={value} onChange={this.onChangeTodo} onClick={this.onAddTodo} />
        <TaskList todos={filterTodos} onTodoClick={this.onTodoClick} />
      </div>
    );
  }
}
