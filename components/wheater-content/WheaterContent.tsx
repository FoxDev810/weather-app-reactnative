import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { useWeather } from "../../provider/Provider";

const WheaterContent = () => {
  const {
    state: {
      currentLocal: { date, temperature, climate, wind, hum },
    },
  } = useWeather();

  return (
    <WeatherContentContainer>
      <StatusBar backgroundColor="#47BFDF" />
      <StandardInfo>Today, {date}</StandardInfo>
      <Temperature>{temperature.toFixed(0)}°</Temperature>
      <Climate>{climate}</Climate>
      <OtherInfoContainer>
        <Wind source={require("../../assets/wind.png")} />
        <Hum source={require("../../assets/hum.png")} />
        <OtherInfo>
          <StandardInfo>Wind</StandardInfo>
          <StandardInfo>Hum</StandardInfo>
        </OtherInfo>
        <OtherInfo>
          <StandardView>
            <Divisor>|</Divisor>
            <StandardInfo>{wind} km/h</StandardInfo>
          </StandardView>
          <StandardView>
            <Divisor>|</Divisor>
            <StandardInfo>{hum} %</StandardInfo>
          </StandardView>
        </OtherInfo>
      </OtherInfoContainer>
    </WeatherContentContainer>
  );
};

const Wind = styled.Image`
  position: absolute;
  width: 20px;
  height: 20px;
  left: -25px;
  top: 1px;
`;

const Hum = styled.Image`
  position: absolute;
  width: 18px;
  height: 21px;
  left: -25px;
  bottom: 3px;
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

  font-family: Overpass_400Regular;
  font-size: 18px;
  /* text shadow normal */
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const StandardView = styled.View`
  flex-direction: row;
`;

const Divisor = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  top: 2px;
  left: -20px;
  position: relative;
`;

const OtherInfoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  max-height: 80px;
  flex-basis: 23%;
  margin-top: 50px;
  margin-left: 20px;
`;

const OtherInfo = styled.View`
  padding-horizontal: 20px;
  justify-content: space-between;
`;

const Climate = styled.Text`
  color: white;
  font-family: Overpass_700Bold;
  text-transform: capitalize;
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
