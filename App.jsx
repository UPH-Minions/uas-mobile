import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Card from './components/Card';
import HeaderBar from './components/HeaderBar';
import ImageCard from './components/Image';
import DATA from './components/DATA';

export default function App() {
  return (
    <SafeAreaView>
      <HeaderBar />
      <ImageCard />
      {DATA?.map((item) => (
        <Card title={item.title} content={item.content} />
      ))}
    </SafeAreaView>
  );
}
