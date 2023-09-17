import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../infrastructure/typography/text";

export const ContactsContent = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const ContactAvatar = styled.View`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  align-items: center;
  justify-content: center;
`;

export const ContactLetter = styled(Text)`
  color: ${(props) => props.theme.colors.bg.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const ContactDetails = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;

export const ContactName = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export const ContactNumber = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  opacity: 0.5;
`;

export const ItemSeparator = styled.View`
  background-color: ${(props) => props.theme.colors.ui.secondary};
  height: ${StyleSheet.hairlineWidth}px;
`;
