import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeAreaTop = styled(SafeAreaView)`
  flex: 0;
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
