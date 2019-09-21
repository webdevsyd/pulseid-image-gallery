import React from 'react';
import PropTypes from 'prop-types';

import {
  FilterWrapper, Wrapper, Label, Select, FilterSubmit,
} from './styles';

const Filters = ({
  loading, filter, onFilterChange, onFilterSubmit,
}) => (
  <FilterWrapper>
    <Wrapper>
      <Label>Per Page:</Label>
      <Select
        data-testid="filter_per_page"
        value={filter.per_page}
        onChange={(e) => onFilterChange('per_page', Number(e.target.value))}
      >
        <option value="">Select Page Size</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
      </Select>
    </Wrapper>
    <Wrapper>
      <Label>Orientation:</Label>
      <Select
        data-testid="filter_orientation"
        value={filter.orientation}
        onChange={(e) => onFilterChange('orientation', e.target.value)}
      >
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="squarish">Squarish</option>
      </Select>
    </Wrapper>
    <FilterSubmit
      disabled={loading}
      type="submit"
      value="Filter"
      data-testid="filter_submit"
      onClick={onFilterSubmit}
    />
  </FilterWrapper>
);

Filters.propTypes = {
  loading: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onFilterSubmit: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    per_page: PropTypes.number.isRequired,
    orientation: PropTypes.string.isRequired,
  }).isRequired,
};

export default Filters;
