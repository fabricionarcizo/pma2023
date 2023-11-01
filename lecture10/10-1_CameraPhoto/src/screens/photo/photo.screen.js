import React, { useContext } from "react";

import { CameraContext } from "../../services/camera/camera.context";
import { PhotoView, ReturnButton, ButtonIcon } from "./photo.style";

export const PhotoScreen = ({ navigation }) => {
  const { uri } = useContext(CameraContext);

  return (
    <>
      <PhotoView source={{ uri: uri, isStatic: true }} />
      <ReturnButton onPress={() => navigation.goBack()}>
        <ButtonIcon name="ios-arrow-back" />
      </ReturnButton>
    </>
  );
};
