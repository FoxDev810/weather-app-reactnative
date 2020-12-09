import React from "react";
import styled from "styled-components/native";
import { Icon } from "../../App";

const WheaterContent = () => (
  <WeatherContentContainer>
    <StandardInfo>Today, 12 September</StandardInfo>
    <Temperature>29°</Temperature>
    <Climate>Cloudy</Climate>
    <OtherInfoContainer>
      <OtherInfo>
        <StandardInfo>
          <Wind source={require("../../assets/wind.png")} />
          Wind
        </StandardInfo>
        <StandardInfoLast>
          <Hum source={require("../../assets/hum.png")} />
          Hum
        </StandardInfoLast>
      </OtherInfo>
      <DivisorContainer>
        <Divisor>|</Divisor>
        <Divisor>|</Divisor>
      </DivisorContainer>
      <OtherInfo>
        <StandardInfo>10 km/h</StandardInfo>
        <StandardInfoLast>54%</StandardInfoLast>
      </OtherInfo>
    </OtherInfoContainer>
  </WeatherContentContainer>
);

const Wind = styled((props) => <Icon {...props} />)`
  position: absolute;
  left: -25px;
  top: -2px;
`;

const Hum = styled((props) => <Icon {...props} />)`
  position: absolute;
  left: -25px;
  bottom: -0px;
`;

const WeatherContentContainer = styled.View`
  align-items: center;
  flex-basis: 65%;
  width: 90%;
  max-width: 353px;
  min-height: 391px;
  justify-content: space-around;
  padding: 45px;
  border-color: rgba(255, 255, 255, 0.7);
  border-width: 2px;
  border-radius: 20px;
`;

const StandardInfo = styled.Text`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  font-family: Overpass_400Regular;
  font-size: 18px;
  /* text shadow normal */
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const StandardInfoLast = styled(StandardInfo)`
  margin-top: 16px;
`;

const DivisorContainer = styled.View`
  margin-top: -9px;
  margin-bottom: -9px;
  justify-content: space-around;
`;

const Divisor = styled.Text`
  color: rgba(255, 255, 255, 0.9);
`;

const OtherInfoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: 20px;
  margin-top: 50px;
`;

const OtherInfo = styled.View`
  padding: 0px 20px;
`;

const Climate = styled.Text`
  color: white;
  font-family: Overpass_700Bold;
  font-size: 24px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const Temperature = styled.Text`
  text-shadow: rgba(0, 0, 0, 0.1) -4px 8px 5px;
  font-family: Overpass_400Regular;
  font-size: 100px;
  color: white;
  margin-left: 15px;
`;

export default WheaterContent;
