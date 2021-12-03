import React from 'react';
import { Container, Image } from './styles';

const ImageCard = () => (
  <Container>
    <Image
      source={{
        uri: 'https://www.uph.edu/wp-content/uploads/2019/05/16.-UPH-RMIT.jpg',
      }}
    />
  </Container>
);

export default ImageCard;
