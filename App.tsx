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
import Svg, { Path } from "react-native-svg";

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
        {Platform.OS === "web" ? (
          <Svg
            style={{ position: "absolute" }}
            width={"100%"}
            height={"100%"}
            viewBox={`0 0 100 100`}
            fill="none"
          >
            <Path
              d="M-16.6965 96.5151C6.83013 94.2539 61.8095 77.7482 81.4359 126.288C105.969 186.963 40.2958 202.038 59.1674 258.944C78.039 315.851 29.7277 349.014 -25 310.197"
              stroke="white"
              strokeOpacity="0.3"
              strokeLinecap="round"
              strokeDasharray="10 10"
            />
            <Path
              d="M152.5 -54L147.918 -46.4771C106.746 21.1156 150.338 108.51 229.1 116.28V116.28C280.398 121.34 320.894 162.429 325.548 213.765V213.765C330.601 269.492 377.35 312.5 433.306 312.5H484"
              stroke="white"
              strokeOpacity="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 10"
            />
          </Svg>
        ) : null}
        <SafeArea>
          <Search />
          <MainSection />
        </SafeArea>
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

export const Icon = styled.Image`
  width: ${({ width }) => (width ? width : 24)}px;
  height: ${({ height }) => (height ? height : 24)}px;
  resize-mode: contain;
`;

export default App;
