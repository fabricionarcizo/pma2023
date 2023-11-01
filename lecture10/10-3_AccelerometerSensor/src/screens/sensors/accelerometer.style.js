import styled from "styled-components/native";
import CircularProgress from "react-native-circular-progress-indicator";

import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../../infrastructure/typography/text";

export const AccelerometerView = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
`;

export const AccelerometerInfo = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
`;

export const AccelerometerProgress = styled(CircularProgress).attrs({
  radius: 75,
  duration: 0,
  maxValue: 1,
  progressValueColor: colors.text.primary,
  titleColor: colors.text.primary,
  activeStrokeWidth: 15,
  inActiveStrokeWidth: 15,
  inActiveStrokeOpacity: 0.2,
  progressFormatter: (value) => {
    "worklet";
    return value.toFixed(2);
  },
})``;
