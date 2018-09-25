import React from 'react';
import PropTypes from 'prop-types';

const FilterBar = ({ filterTodos }) => (
  <p>
    <span onClick={() => filterTodos('all')}>All | </span>
    <span onClick={() => filterTodos('done')}>Done | </span>
    <span onClick={() => filterTodos('process')}>In Process</span>
  </p>
);

const { func } = PropTypes;

FilterBar.propTypes = {
  filterTodos: func.isRequired,
};

export default FilterBar;
