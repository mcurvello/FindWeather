import { Image, SafeAreaView } from "react-native";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Text from "../../components/Text";
import theme from "../../theme";
import Styled from "./styles";

import CloudAndThunder from "../../assets/images/cloud-and-thunder.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";

const LetterBold = () => (
  <Text
    fontFamily={theme.fontFamily.OverpassBold}
    fontSize={theme.fontSize.md22}
    color={theme.colors.gray100}
  >
    Weather
  </Text>
);

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const Welcome = ({ navigation }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <SafeAreaView>
        <Divider top={113} />
        <Styled.ContainerImage>
          <Image source={CloudAndThunder} />
        </Styled.ContainerImage>
        <Divider top={57} />
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={theme.fontSize.xxl33}
          color={theme.colors.white}
        >
          Descubra o Clima na sua Cidade
        </Text>
        <Divider top={33} />
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={theme.fontSize.md22}
          color={theme.colors.gray100}
        >
          Com o Find
          <LetterBold /> nunca ficou tão fácil ter a previsão do tempo na palma
          da sua mão
        </Text>
        <Divider top={74} />
        <Button
          backgroundColor={theme.colors.dark300}
          borderColor={theme.colors.gray300}
          borderRadius={18}
          height={54}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.md22}
            color={theme.colors.white}
          >
            Iniciar
          </Text>
        </Button>
        <Divider bottom={10} />
      </SafeAreaView>
    </Styled.Container>
  );
};

export default Welcome;
