import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #ffab00;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
`;
