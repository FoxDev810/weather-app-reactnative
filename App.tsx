import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <LinearGradientContainer colors={["#47BFDF", "#4A91FF"]}>
      <Container source={require("./assets/bg-lines.svg")}>
        <Header>
          <LocalIcon source={require("./assets/localization.svg")} />
        </Header>
        <WeatherContent></WeatherContent>
      </Container>
    </LinearGradientContainer>
  );
};

const LinearGradientContainer = styled(LinearGradient)`
  flex: 1;
`;

const LocalIcon = styled.Image`
  width: 24px;
  height: 24px;
  background: transparent;
  resize-mode: center;
`;

const Container = styled.ImageBackground`
  flex: 1;
`;

const Header = styled.View`
  display: flex;
`;

const WeatherContent = styled.View``;

export default App;
