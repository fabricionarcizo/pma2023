import styled from "styled-components/native";
import { Button } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";

import { Text } from "../../infrastructure/typography/text";
import { colors } from "../../infrastructure/theme/colors";

export const PedometerView = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
`;

export const PedometerInfo = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
`;

export const PedometerProgress = styled(CircularProgress).attrs({
  radius: 130,
  duration: 0,
  maxValue: 5000,
  progressValueColor: colors.text.primary,
  title: "Steps",
  titleFontSize: 30,
  titleColor: colors.text.primary,
  subtitle: "Goal: 5000",
  subtitleFontSize: 21,
  subtitleColor: colors.text.primary,
  activeStrokeWidth: 20,
  activeStrokeColor: colors.bg.secondary,
  inActiveStrokeWidth: 20,
  inActiveStrokeColor: colors.bg.tertiary,
})``;

export const ButtonsView = styled.View.attrs({
  flexDirection: "row",
})``;

export const AppButton = styled(Button).attrs({
  mode: "outlined",
  textColor: colors.text.primary,
  rippleColor: colors.text.primary,
})`
  width: 110px;
`;
