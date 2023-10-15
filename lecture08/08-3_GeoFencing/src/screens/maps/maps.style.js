import styled from "styled-components/native";
import MapView from "react-native-maps";
import { IconButton, FAB } from "react-native-paper";

import { Text } from "../../infrastructure/typography/text";

export const Maps = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MenuView = styled.View`
  position: absolute;
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  height: 48px;
  margin-top: 48px;
  justify-content: center;
`;

export const MenuHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
`;

export const MenuButton = styled(IconButton)`
  position: absolute;
  margin-start: 8px;
`;

export const LayersButton = styled(FAB)`
  position: absolute;
  background-color: ${(props) => props.theme.colors.brand.muted};
  margin: ${(props) => props.theme.space[3]};
  right: ${(props) => props.theme.space[0]};
  margin-top: 112px;
`;

export const LocationButton = styled(FAB)`
  position: absolute;
  background-color: ${(props) => props.theme.colors.brand.muted};
  margin: ${(props) => props.theme.space[3]};
  right: ${(props) => props.theme.space[0]};
  margin-top: 168px;
`;
