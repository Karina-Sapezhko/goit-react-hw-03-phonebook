import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleFilterChange }) => (
  <label>
    <p>Find contacts by name:</p>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
    />
  </label>
);

Filter.propType = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
