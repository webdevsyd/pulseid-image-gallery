import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filters from './index';

const props = {
  loading: false,
  onFilterChange: jest.fn(),
  onFilterSubmit: jest.fn(),
  filter: {
    per_page: 25,
    orientation: 'landscape',
  },
};

const { getByTestId } = render(
  <Filters
    loading={props.loading}
    onFilterChange={props.onFilterChange}
    onFilterSubmit={props.onFilterSubmit}
    filter={props.filter}
  />,
);

const filterPerPage = getByTestId('filter_per_page');
const filterOrientation = getByTestId('filter_orientation');
const filterSubmit = getByTestId('filter_submit');

test('Test onFilterChange function to be call', () => {
  fireEvent.change(filterPerPage, { target: { value: 25 } });
  expect(props.onFilterChange).toHaveBeenCalledTimes(1);
});

test('Test onFilterChange function to be call', () => {
  fireEvent.change(filterOrientation, { target: { value: 'orientation' } });
  expect(props.onFilterChange).toHaveBeenCalledTimes(1);
});

test('Test filter per_page props should change', () => {
  const reRenderFilter = render(
    <Filters
      loading={props.loading}
      onFilterChange={props.onFilterChange}
      onFilterSubmit={props.onFilterSubmit}
      filter={{ ...props.filter, per_page: 50 }}
    />,
  );
  expect(reRenderFilter.getByTestId('filter_per_page').value).toBe('50');
});

test('Test filter orientation props should change', () => {
  const reRenderFilter = render(
    <Filters
      loading={props.loading}
      onFilterChange={props.onFilterChange}
      onFilterSubmit={props.onFilterSubmit}
      filter={{ ...props.filter, orientation: 'portrait' }}
    />,
  );
  expect(reRenderFilter.getByTestId('filter_orientation').value).toBe('portrait');
});

test('Test submit button loading disabled false', () => {
  expect(filterSubmit).not.toBeDisabled();
});

test('Test submit button loading disabled true', () => {
  const reRenderFilter = render(
    <Filters
      loading
      onFilterChange={props.onFilterChange}
      onFilterSubmit={props.onFilterSubmit}
      filter={props.filter}
    />,
  );
  expect(reRenderFilter.getByTestId('filter_submit')).toBeDisabled();
});
