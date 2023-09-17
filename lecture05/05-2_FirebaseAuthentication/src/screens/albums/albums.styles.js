import styled from "styled-components/native";

export const AlbumsContent = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
}))``;

export const AlbumItem = styled.View`
  width: 50%;
  aspect-ratio: 1;
`;

export const AlbumImage = styled.Image`
  resize-mode: cover;
  height: 100%;
  width: 100%;
`;
