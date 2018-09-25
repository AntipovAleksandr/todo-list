import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const { string, func, bool } = PropTypes;

export default class TaskListItem extends PureComponent {
  static propTypes = {
    onTodoClick: func.isRequired,
    id: string.isRequired,
    isDone: bool.isRequired,
  };

  handleRemove = () => {
    const { id, onTodoClick } = this.props;
    onTodoClick(id);
  };

  render() {
    const { todo, isDone } = this.props;
    return (
      <li onClick={this.handleRemove} className={`primary ${isDone && 'done'}`}>
        {todo}
      </li>
    );
  }
}
