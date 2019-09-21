import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
} from './styles';

const Search = ({ query, onSearchChange }) => (
  <Input
    onChange={onSearchChange}
    value={query}
    placeholder="Search Here..."
  />
);

Search.defaultProps = {
  query: '',
};

Search.propTypes = {
  query: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
