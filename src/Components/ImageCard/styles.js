import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 #e3e5ed;
  width: 100%;
  height: 250px;
  cursor: pointer;
  margin-bottom: 16px;
  overflow: hidden;
`;


export const Image = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
