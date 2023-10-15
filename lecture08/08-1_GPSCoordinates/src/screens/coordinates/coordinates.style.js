import styled from "styled-components/native";
import { FAB } from "react-native-paper";

import { Text } from "../../infrastructure/typography/text";

export const ContentCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const CoordinatesContent = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const CoordinatesHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.bg.primary};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const CoordinatesValue = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.bg.primary};
  padding-vertical: ${(props) => props.theme.space[1]};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const CoordinatesDMS = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.bg.primary};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const AccuracyContent = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const AccuracyHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const AccuracyValue = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.brand.primary};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const AddressButton = styled(FAB)`
  position: absolute;
  background-color: ${(props) => props.theme.colors.brand.primary};
  right: ${(props) => props.theme.space[4]};
  bottom: ${(props) => props.theme.space[4]};
`;

export const AddressContent = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const AddressHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding-vertical: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const AddressValue = styled(Text)`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
