import React from 'react';
import PropTypes from 'prop-types';


import {
  Wrapper, Image,
} from './styles';

const ImageCard = ({ srcImage }) => (
  <Wrapper>
    <Image src={srcImage} width="100%" height="250" />
  </Wrapper>
);

ImageCard.propTypes = {
  srcImage: PropTypes.string.isRequired,
};

export default ImageCard;
