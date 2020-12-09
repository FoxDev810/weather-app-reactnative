import React from "react";
import { AppLoading } from "expo";
import { StatusBar, Platform } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Overpass_700Bold,
  Overpass_400Regular,
} from "@expo-google-fonts/overpass";
import { Search } from "./components/search";
import { Provider } from "./provider";
import { MainSection } from "./components/main-section";

const App = () => {
  const [isFontLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_400Regular,
  });

  return !isFontLoaded ? (
    <AppLoading />
  ) : (
    <Provider>
      <LinearGradientContainer colors={["#47BFDF", "#4A91FF"]}>
        <Container source={require("./assets/bg-lines.svg")}>
          <SafeArea>
            <Search />
            <MainSection />
          </SafeArea>
        </Container>
      </LinearGradientContainer>
    </Provider>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : "0"}px;
  padding-top: 8%;
  padding-bottom: 8%;
`;

const LinearGradientContainer = styled(LinearGradient)`
  flex: 1;
`;

const Container = styled.ImageBackground`
  flex: 1;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: center;
`;

export default App;
