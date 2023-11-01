import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const hasCameraPermission = async () => {
  let { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
  if (cameraStatus !== "granted") {
    console.log("Permission to access the camera was denied.");
    return false;
  }

  let { status: microphoneStatus } =
    await Camera.requestMicrophonePermissionsAsync();
  if (microphoneStatus !== "granted") {
    console.log("Permission to access the microphone was denied.");
    return false;
  }

  let { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
  if (mediaStatus !== "granted") {
    console.log("Permission to access the media library was denied.");
    return false;
  }

  return true;
};

export const recordVideo = async (camera) => {
  const albumName = "PMA 2023";
  const { uri } = await camera.recordAsync();
  const asset = await MediaLibrary.createAssetAsync(uri);
  let album = await MediaLibrary.getAlbumAsync(albumName);

  if (!album) {
    await MediaLibrary.createAlbumAsync(albumName, asset);
  } else {
    await MediaLibrary.addAssetsToAlbumAsync(asset, album);
  }

  return await MediaLibrary.getAssetInfoAsync(asset.id);
};

export const stopVideo = async (camera) => {
  await camera.stopRecording();
};
