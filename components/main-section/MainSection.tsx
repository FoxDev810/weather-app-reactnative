import React from "react";
import { useAppInfo } from "../../provider/Provider";
import { Header } from "../header";
import styled from "styled-components/native";
import { WheaterContent } from "../wheater-content";

const MainSection = () => {
  const {
    state: { isSearchOpen },
  } = useAppInfo();

  return (
    <MainSectionContainer isSearchOpen={isSearchOpen}>
      <Header />
      <WeatherIllustration source={require("../../assets/cloud.png")} />
      <WheaterContent />
    </MainSectionContainer>
  );
};

type MainTypes = {
  isSearchOpen: boolean;
};

const MainSectionContainer = styled.View<MainTypes>`
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? "0.4" : "1")};
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  z-index: ${({ isSearchOpen }) => (isSearchOpen ? -1 : 1)};
  elevation: ${({ isSearchOpen }) => (isSearchOpen ? -1 : 1)};
`;

const WeatherIllustration = styled.Image`
  width: 190px;
  height: 190px;
  margin-right: 13px;
  flex-basis: 12%;
  resize-mode: contain;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export default MainSection;
