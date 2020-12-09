import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Icon } from "../../App";
import { useAppInfo } from "../../provider/Provider";

const Search = () => {
  const {
    state: { isSearchOpen },
    setIsSearchOpen,
  } = useAppInfo();

  return isSearchOpen ? (
    <SearchContainer>
      <SearchBarWrapper>
        <GoBack onPressOut={() => setIsSearchOpen(false)}>
          <Icon source={require("../../assets/arrow-left.svg")} />
        </GoBack>
        <SearchBar placeholder="City name"></SearchBar>
      </SearchBarWrapper>
    </SearchContainer>
  ) : null;
};

const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const SearchContainer = styled.View`
  position: absolute;
  background: #fcfcfc;
  padding: 49px 0;
  justify-content: center;
  align-items: center;
  flex: 1;
  top: 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 100%;
  max-width: 700px;
  z-index: 1;
`;

const SearchBarWrapper = styled.View`
  width: 86%;
`;

const SearchBar = styled.TextInput`
  background: #ffffff;
  // box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 15px 56px;
  font-family: Overpass_400Regular;
  font-size: 18px;
  border-width: 2px;
  background: lightblue;
`;

export default Search;
