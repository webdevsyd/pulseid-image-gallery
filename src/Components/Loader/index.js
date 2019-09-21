import React from 'react';

import { Wrapper, Spinner } from './styles';

const Loader = () => (
  <Wrapper data-testid="loader_for_initial_api_call">
    <Spinner />
  </Wrapper>
);

export default Loader;
