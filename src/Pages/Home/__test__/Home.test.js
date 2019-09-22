import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FetchPhotos } from '../../../Api';
import Home from '../index';


const response = {
  status: 200,
  data: [
    {
      id: 'FZrn8fhqpp8',
      urls: {
        small: 'https://images.unsplash.com/photo-1562184647-b8ab86682676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM1MDUwfQ',
      },
      user: {
        username: 'sydneyaustralia',
        profile_image: {
          medium: 'https://images.unsplash.com/profile-1568721717291-fb593040b804image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        },
      },
    },
    {
      id: 'sFZrn8fhqpp8',
      urls: {
        small: 'https://images.unsplash.com/photo-1562184647-b8ab86682676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM1MDUwfQ',
      },
      user: {
        username: 'sydneyaustralia',
        profile_image: {
          medium: 'https://images.unsplash.com/profile-1568721717291-fb593040b804image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        },
      },
    },
  ],
  headers: {
    'x-total': 2,
  },
};

jest.mock('../../../Api');

test("show loader when it's fetching data, then render it using FetchPhotos", async () => {
  FetchPhotos.mockResolvedValueOnce(response);
  const { getByTestId, getAllByTestId } = render(<Home />);
  expect(getByTestId('loader_for_initial_api_call')).toBeInTheDocument();
  await wait(() => expect(getAllByTestId('image_list').length).toEqual(response.data.length));
  expect(FetchPhotos).toHaveBeenCalledTimes(1);
});
