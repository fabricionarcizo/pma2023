import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";

import { colors } from "../../infrastructure/theme/colors";

export const CameraView = styled(Camera)`
  flex: 1;
  align-items: center;
`;

export const ButtonsView = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.space[6]};
  bottom: ${(props) => props.theme.space[0]};
  left: ${(props) => props.theme.space[0]};
  right: ${(props) => props.theme.space[0]};
`;

export const BigButton = styled.TouchableOpacity`
  width: ${(props) => props.theme.sizes[5]};
  height: ${(props) => props.theme.sizes[5]};
  border-radius: ${(props) => props.theme.sizes[5]};
  border-width: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-color: ${(props) => props.theme.colors.text.primary};
`;

export const SmallButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
  border-radius: ${(props) => props.theme.sizes[4]};
  border-width: ${(props) => props.theme.sizes[0]};
  border-color: ${(props) => props.theme.colors.text.primary};
`;

export const ButtonIcon = styled(Ionicons).attrs({
  size: 32,
  color: colors.text.primary,
})``;

export const SnackbarText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;
