import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, LogoHeader } from './styles';
import { Text } from 'react-native';

const HeaderBar = () => (
  <Container>
    <Feather name='menu' size={28} color='#f4f5f6' />
    <LogoHeader>Hola</LogoHeader>
    <MaterialCommunityIcons
      name='message-text-outline'
      size={28}
      color='#f4f5f6'
    />
  </Container>
);

export default HeaderBar;
