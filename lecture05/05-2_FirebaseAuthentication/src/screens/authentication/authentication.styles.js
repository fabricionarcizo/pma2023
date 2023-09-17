import styled from "styled-components/native";

import { Button, TextInput } from "react-native-paper";

import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../infrastructure/typography/text";

export const AuthenticationBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/itu.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthenticationCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AuthenticationContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthenticationButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthenticationInput = styled(TextInput)`
  width: 300px;
`;

export const AuthenticationTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  align-self: center;
`;

export const AuthenticationAccount = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  align-self: center;
`;

export const AuthenticationLink = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.brand.primary};
  text-decoration-line: underline;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
