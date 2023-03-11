import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

const statusBarHeight = Platform.OS === "ios" ? 0 : StatusBar;

const Container = styled.SafeAreaView`
  margin-top: ${statusBarHeight};
`;

const ContainerEmptyState = styled.View`
  align-items: center;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.dark};
  padding: 0 16px;
`;

const LocationIconContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const LocationTextContainer = styled.View``;

const LocationCityCountryContainer = styled.View`
  flex-direction: row;
`;

const ImageContainer = styled.View`
  align-items: center;
`;

const TodayAndNextDaysContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const NextDaysContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

export default {
  Container,
  ContainerEmptyState,
  ImageContainer,
  LocationIconContainer,
  LocationTextContainer,
  LocationCityCountryContainer,
  NextDaysContainer,
  ScrollView,
  TodayAndNextDaysContainer,
};
