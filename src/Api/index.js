import axios from 'axios';
import queryString from 'query-string';

import { BASE_URL, CLIENT_ID } from '../Config/config';

export const FetchPhotos = (filter) => (
  axios.get(
    `${BASE_URL}/photos/?${queryString.stringify(filter)}`,
    {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    },
  )
);

export const FetchSearchPhotos = (filter) => (
  axios.get(
    `${BASE_URL}/search/photos/?${queryString.stringify(filter)}`,
    {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    },
  )
);
