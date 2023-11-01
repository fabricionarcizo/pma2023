import React, { createContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import { CameraType } from "expo-camera";

import { hasCameraPermission, recordVideo, stopVideo } from "./camera.service";

export const CameraContext = createContext();

export const CameraContextProvider = ({ children }) => {
  const isAndroid = Platform.OS === "android";

  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(CameraType.front);
  const [camera, setCamera] = useState(null);
  const [uri, setUri] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    (async () => {
      hasCameraPermission()
        .then((hasPermission) => setHasPermission(hasPermission))
        .catch((error) => {
          console.error(error);
          setHasPermission(false);
        });
    })();
  }, []);

  const toggleCamera = () => {
    const newType =
      type === CameraType.back ? CameraType.front : CameraType.back;
    setType(newType);
  };

  const toggleVideo = async () => {
    if (isRecording) {
      setIsRecording(false);
      stopVideo(camera);
    } else if (hasPermission) {
      setUri(null);
      setIsRecording(true);
      recordVideo(camera).then((asset) =>
        setUri(isAndroid ? asset.uri : asset.localUri)
      );
    }
  };

  return (
    <CameraContext.Provider
      value={{ type, uri, isRecording, setCamera, toggleCamera, toggleVideo }}
    >
      {children}
    </CameraContext.Provider>
  );
};
