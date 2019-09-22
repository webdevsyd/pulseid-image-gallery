import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageCard from '../index';

test('Test srcImage props to be rendered correctly', () => {
  const srcImage = 'https://images.unsplash.com/photo-1569014309792-502f2a625642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=400&height=400&q=60';
  const user = {
    username: 'sydneyaustralia',
    profile_image: {
      medium: 'https://images.unsplash.com/profile-1568721717291-fb593040b804image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
    },
  };
  const { getByTestId } = render(<ImageCard user={user} srcImage={srcImage} dataTestId="image_list" />);
  expect(getByTestId('image').src).toBe(srcImage);
  expect(getByTestId('user_avatar').src).toBe(user.profile_image.medium);
  expect(getByTestId('username')).toHaveTextContent(user.username);
});
