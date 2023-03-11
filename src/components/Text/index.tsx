import { ReactNode } from "react";
import { TextProps } from "react-native";
import Styled from "./styles";

export interface IText extends TextProps {
  children: ReactNode;
  fontFamily: string;
  fontSize: number;
  color: string;
  textAlign?: "center" | "right" | "left";
}

const Text = ({
  children,
  fontFamily,
  fontSize,
  color,
  textAlign = "center",
  ...rest
}): JSX.Element => {
  return (
    <Styled.Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Styled.Text>
  );
};

export default Text;
