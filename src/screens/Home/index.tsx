import { Image, TouchableOpacity } from "react-native";
import Divider from "../../components/Divider";
import Text from "../../components/Text";
import theme from "../../theme";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import Styled from "./styles";

import Temperature from "../../components/Temperature";
import WeatherDescription from "../../components/WeatherDescription";

import ClimateChange from "../../assets/images/climate-change.png";
import Raining from "../../assets/images/raining.png";
import DropMiniature from "../../assets/images/drop-miniature.png";
import RainingCloud from "../../assets/images/raining-cloud-miniature.png";
import WindMiniature from "../../assets/images/wind-miniature.png";
import CardHourTemperature from "../../components/CardHourTemperature";

const dataWeatherDescription = [
  {
    id: 1,
    icon: DropMiniature,
    value: "24%",
    text: "Umidade",
  },

  {
    id: 2,
    icon: WindMiniature,
    value: "30km/h",
    text: "Veloc. Vento",
  },

  {
    id: 3,
    icon: RainingCloud,
    value: "76%",
    text: "Chuva",
  },
];

const dataCardHourTemperature = [
  {
    id: 1,
    icon: DropMiniature,
    temperatureValue: 23,
    hour: "09:00",
  },

  {
    id: 2,
    icon: WindMiniature,
    temperatureValue: 18,
    hour: "13:00",
  },

  {
    id: 3,
    icon: RainingCloud,
    temperatureValue: 8,
    hour: "17:00",
  },

  {
    id: 4,
    icon: RainingCloud,
    temperatureValue: 8,
    hour: "23:00",
  },
];

const EmptyStateContent = () => {
  return (
    <Styled.Container>
      <Styled.ContainerEmptyState>
        <Divider top={60} />
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.xxl33}
          color={theme.colors.white}
        >
          Find
          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.xxl33}
            color={theme.colors.white}
          >
            Weather
          </Text>
        </Text>
        <Divider top={100} />
        <Image source={ClimateChange} />
        <Divider top={100} />
        <TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.md22}
            color={theme.colors.gray100}
            style={{ textDecorationLine: "underline" }}
          >
            Selecione aqui um local e {"\n"} encontre o clima em tempo real
          </Text>
        </TouchableOpacity>
      </Styled.ContainerEmptyState>
    </Styled.Container>
  );
};

const FullStateContent = () => {
  return (
    <>
      <Styled.Container>
        <Divider top={27} />
        <Styled.LocationIconContainer>
          <Ionicons
            name="location-sharp"
            size={22}
            color={theme.colors.white}
          />
          <Styled.LocationTextContainer>
            <Styled.LocationCityCountryContainer>
              <Text
                fontFamily={theme.fontFamily.OverpassRegular}
                fontSize={theme.fontSize.md22}
                color={theme.colors.gray100}
              >
                A Coruña,{" "}
              </Text>
              <Text
                fontFamily={theme.fontFamily.OverpassRegular}
                fontSize={theme.fontSize.md22}
                color={theme.colors.gray100}
              >
                Espanha
              </Text>
            </Styled.LocationCityCountryContainer>
            <Divider top={3} />
            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.xs16}
              color={theme.colors.gray100}
            >
              Domingo, 01 Jan de 2023
            </Text>
          </Styled.LocationTextContainer>
        </Styled.LocationIconContainer>
        <Divider top={43} />
        <Styled.ImageContainer>
          <Image source={Raining} />
        </Styled.ImageContainer>
        <Temperature
          maxTemp={23}
          minTemp={18}
          maxTempFontSize={theme.fontSize.giant76}
          minTempFontSize={theme.fontSize.xl40}
        />
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.md22}
          color={theme.colors.gray100}
        >
          Chuva Moderada
        </Text>
      </Styled.Container>
      <Divider top={30} />
      <WeatherDescription data={dataWeatherDescription} />
      <Divider top={30} />
      <Styled.TodayAndNextDaysContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.md20}
          color={theme.colors.white}
        >
          Hoje
        </Text>
        <Styled.NextDaysContainer>
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.xs16}
            color={theme.colors.gray100}
          >
            Próximos 7 dias
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={11}
            color={theme.colors.gray100}
            style={{ marginLeft: 4 }}
          />
        </Styled.NextDaysContainer>
      </Styled.TodayAndNextDaysContainer>
      <Divider top={15} />
      <CardHourTemperature data={dataCardHourTemperature} />
      <Divider top={15} />
    </>
  );
};

const Home = (): JSX.Element => {
  return (
    <Styled.ScrollView>
      <FullStateContent />
    </Styled.ScrollView>
  );
};

export default Home;
