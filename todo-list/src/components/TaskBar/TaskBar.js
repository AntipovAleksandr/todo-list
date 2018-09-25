import React from 'react';
import PropTypes from 'prop-types';

const TaskBar = ({ value, onChange, buttonName, onClick }) => (
  <div>
    <input type="text" value={value} onChange={onChange} />
    <button onClick={onClick} disabled={!value.length}>
      {buttonName}
    </button>
  </div>
);

const { string, func } = PropTypes;

TaskBar.defaultProps = {
  buttonName: 'Add todo',
};

TaskBar.propTypes = {
  buttonName: string,
  value: string.isRequired,
  onClick: func.isRequired,
  onChange: func.isRequired,
};

export default TaskBar;
