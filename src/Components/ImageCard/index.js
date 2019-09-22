import React from 'react';
import PropTypes from 'prop-types';


import {
  Wrapper, Image, FooterWrapper, AvatarWrapper, AvatarUsername, Overlay,
} from './styles';

const ImageCard = ({ srcImage, user }) => (
  <Wrapper data-testid="image_list">
    <Image data-testid="image" src={srcImage} width="100%" height="250" />
    <Overlay data-testid="image_overlay_hover">
      <FooterWrapper>
        <AvatarWrapper data-testid="user_avatar" src={user.profile_image.medium} />
        <AvatarUsername data-testid="username">{user.username}</AvatarUsername>
      </FooterWrapper>
    </Overlay>
  </Wrapper>
);

ImageCard.propTypes = {
  srcImage: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profile_image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ImageCard;
