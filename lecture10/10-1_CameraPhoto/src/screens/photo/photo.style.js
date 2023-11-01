import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../infrastructure/theme/colors";

export const PhotoView = styled.Image`
  flex: 1;
  align-items: center;
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
