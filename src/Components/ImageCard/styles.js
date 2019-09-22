import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 #e3e5ed;
  cursor: pointer;
  margin-bottom: 16px;
  overflow: hidden;
`;


export const Image = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  transition: all 0.3s;
  top: 0;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
`;


export const AvatarWrapper = styled(LazyLoadImage)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;


export const AvatarUsername = styled.span`
  display: block;
  color: #FFF;
  font-weight: 600;
  margin-left: 10px;
`;
