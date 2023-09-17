import styled from "styled-components/native";

import { Text } from "../../infrastructure/typography/text";

export const ArticlesContent = styled.ScrollView``;

export const ArticleItem = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const ArticleDate = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  opacity: 0.5;
`;

export const ArticleHeading = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding-vertical: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const ArticleParagraph = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  line-height: ${(props) => props.theme.fontSizes.h5};
  padding-vertical: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const ArticleImage = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: cover;
  margin-vertical: ${(props) => props.theme.space[2]};
`;

export const AuthorInfo = styled.View`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const AuthorImage = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;

export const AuthorMeta = styled.View`
  justify-content: center;
  padding-horizontal: ${(props) => props.theme.space[2]};
`;

export const AuthorName = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
