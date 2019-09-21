import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './index';

test('Test onSearchChange function to be call', () => {
  const onSearchChange = jest.fn();
  const { getByTestId } = render(<Search query="travel" onSearchChange={onSearchChange} />);
  fireEvent.change(getByTestId('search'), { target: { value: '23' } });
  expect(onSearchChange).toHaveBeenCalledTimes(1);
});

test('Test query props should change', () => {
  const onSearchChange = jest.fn();
  const { getByTestId } = render(<Search query="experiment" onSearchChange={onSearchChange} />);
  expect(getByTestId('search').value).toBe('experiment');
});
