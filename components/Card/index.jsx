import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ColumnContainer, Container, Content, Title } from './styles';

const Card = ({ title, content }) => (
  <Container>
    <ColumnContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </ColumnContainer>
    <AntDesign name='right' size={28} color='#002d77' />
  </Container>
);

export default Card;
