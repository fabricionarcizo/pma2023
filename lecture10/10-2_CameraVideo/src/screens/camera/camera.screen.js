import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { Snackbar } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";

import { CameraContext } from "../../services/camera/camera.context";
import { Spacer } from "../../components/spacer.component";

import {
  CameraView,
  ButtonsView,
  BigButton,
  SmallButton,
  ButtonIcon,
  SnackbarText,
} from "./camera.style";

export const CameraScreen = ({ navigation }) => {
  const isAndroid = Platform.OS === "android";
  const isFocused = useIsFocused();

  const [visible, setVisible] = useState(false);

  const { type, uri, isRecording, setCamera, toggleCamera, toggleVideo } =
    useContext(CameraContext);

  const stopVideo = () => {
    setVisible(true);
    toggleVideo();

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
    <>
      {isFocused && (
        <CameraView
          ref={(ref) => setCamera(ref)}
          type={type}
          useCamera2Api={isAndroid}
          ratio={"2:1"}
        >
          <ButtonsView>
            <SmallButton disabled={isRecording} onPress={() => toggleCamera()}>
              <ButtonIcon name="camera-reverse-outline" />
            </SmallButton>
            <Spacer size="small" position="left" />
            <Spacer size="large" position="left" />
            {!isRecording ? (
              <BigButton onPress={() => toggleVideo()} />
            ) : (
              <BigButton
                style={{ backgroundColor: "red" }}
                onPress={() => stopVideo()}
              />
            )}
            <Spacer size="small" position="right" />
            <Spacer size="large" position="right" />
            <SmallButton
              disabled={isRecording || uri ? false : true}
              onPress={() => navigation.navigate("Video")}
            >
              <ButtonIcon name="albums-outline" />
            </SmallButton>
          </ButtonsView>
          <Snackbar visible={visible}>
            <SnackbarText>Video successfully saved!</SnackbarText>
          </Snackbar>
        </CameraView>
      )}
    </>
  );
};
