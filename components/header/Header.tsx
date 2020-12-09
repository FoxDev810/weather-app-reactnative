import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { Icon } from "../../App";
import { useAppInfo } from "../../provider/Provider";

const Header = () => {
  const { setIsSearchOpen } = useAppInfo();

  return (
    <HeaderContainer onPressOut={() => setIsSearchOpen(true)}>
      <Icon source={require("../../assets/localization.svg")} />
      <LocalText>Semarang</LocalText>
      <Icon source={require("../../assets/arrow-down.svg")} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Pressable)`
  width: 197px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const LocalText = styled.Text`
  font-family: Overpass_700Bold;
  font-size: 24px;
  color: #ffffff;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export default Header;
