import React, { useContext, useRef } from "react";

import { CameraContext } from "../../services/camera/camera.context";
import { VideoView, ReturnButton, ButtonIcon } from "./video.style";

export const VideoScreen = ({ navigation }) => {
  const video = useRef(null);
  const { uri } = useContext(CameraContext);

  return (
    <>
      <VideoView ref={video} source={{ uri: uri }} />
      <ReturnButton onPress={() => navigation.goBack()}>
        <ButtonIcon name="ios-arrow-back" />
      </ReturnButton>
    </>
  );
};
