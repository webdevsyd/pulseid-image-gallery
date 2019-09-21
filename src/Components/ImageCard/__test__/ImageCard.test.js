import React from 'react';
import { render } from '@testing-library/react';
import ImageCard from '../index';

test('Test srcImage props to be rendered correctly', () => {
  const srcImage = 'https://images.unsplash.com/photo-1569014309792-502f2a625642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=400&height=400&q=60';
  const { getByTestId } = render(<ImageCard srcImage={srcImage} />);
  expect(getByTestId('image').src).toBe(srcImage);
});
