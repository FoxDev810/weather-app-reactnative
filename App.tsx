import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
      <Container source={require('./assets/bg-lines.svg')}>
        <Header>
          <Text>Test</Text>
        </Header>
        <WeatherContent></WeatherContent>
      </Container>
    </LinearGradient>
  );
};

const Container = styled.ImageBackground`
  flex: 1;
`;

const Header = styled.View`
  display: flex;
`;

const WeatherContent = styled.View``;

export default App;
