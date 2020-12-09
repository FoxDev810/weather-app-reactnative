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
      <Cloud source={require("../../assets/cloud.png")} />
      <WheaterContent />
    </MainSectionContainer>
  );
};

type BlurTypes = {
  isSearchOpen: boolean;
};

const MainSectionContainer = styled.View<BlurTypes>`
  flex: 1;
  filter: ${({ isSearchOpen }) => (isSearchOpen ? "blur(0.5px)" : "0")};
  justify-content: space-around;
  align-items: center;
`;

const Cloud = styled.Image`
  width: 190px;
  height: 190px;
  margin-right: 13px;
  flex-basis: 12%;
  resize-mode: contain;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export default MainSection;
