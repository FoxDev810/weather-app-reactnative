import React from "react";
import styled from "styled-components/native";
import { Icon } from "../../App";
import { useAppInfo, useWeather } from "../../provider/Provider";

const Header = () => {
  const { setIsSearchOpen } = useAppInfo();
  const {
    state: {
      currentLocal: { city },
    },
  } = useWeather();

  return (
    <HeaderContainer onPressOut={() => setIsSearchOpen(true)}>
      <Icon
        width={18}
        height={21}
        source={require("../../assets/localization.png")}
      />
      <LocalText numberOfLines={1}>{city}</LocalText>
      <Icon
        width={15}
        height={10}
        source={require("../../assets/arrow-down.png")}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LocalText = styled.Text`
  font-family: Overpass_700Bold;
  font-size: 24px;
  padding-horizontal: 20px;
  color: #ffffff;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export default Header;
