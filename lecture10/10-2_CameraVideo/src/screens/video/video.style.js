import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";

import { colors } from "../../infrastructure/theme/colors";

export const VideoView = styled(Video).attrs({
  isLooping: true,
  shouldPlay: true,
  resizeMode: ResizeMode.COVER,
})`
  flex: 1;
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const ReturnButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.sizes[3]};
  height: ${(props) => props.theme.sizes[3]};
  border-radius: ${(props) => props.theme.sizes[3]};
  top: ${(props) => props.theme.space[0]};
  left: ${(props) => props.theme.space[0]};
  margin-top: ${(props) => props.theme.space[5]};
  margin-left: ${(props) => props.theme.space[3]};
`;

export const ButtonIcon = styled(Ionicons).attrs({
  size: 32,
  color: colors.text.primary,
})``;
