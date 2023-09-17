import React from "react";

import { AlbumsContent, AlbumItem, AlbumImage } from "./albums.styles";
import { SafeArea } from "../../components/safe-area.component";

const COVERS = [
  require("../../../assets/album-art-01.jpg"),
  require("../../../assets/album-art-02.jpg"),
  require("../../../assets/album-art-03.jpg"),
  require("../../../assets/album-art-04.jpg"),
  require("../../../assets/album-art-05.jpg"),
  require("../../../assets/album-art-06.jpg"),
  require("../../../assets/album-art-07.jpg"),
  require("../../../assets/album-art-08.jpg"),
  require("../../../assets/album-art-09.jpg"),
  require("../../../assets/album-art-10.jpg"),
  require("../../../assets/album-art-11.jpg"),
  require("../../../assets/album-art-12.jpg"),
  require("../../../assets/album-art-13.jpg"),
  require("../../../assets/album-art-14.jpg"),
  require("../../../assets/album-art-15.jpg"),
  require("../../../assets/album-art-16.jpg"),
  require("../../../assets/album-art-17.jpg"),
  require("../../../assets/album-art-18.jpg"),
  require("../../../assets/album-art-19.jpg"),
  require("../../../assets/album-art-20.jpg"),
];

export const AlbumsScreen = () => {
  return (
    <SafeArea>
      <AlbumsContent>
        {COVERS.map((source, i) => (
          <AlbumItem key={i}>
            <AlbumImage source={source} />
          </AlbumItem>
        ))}
      </AlbumsContent>
    </SafeArea>
  );
};
