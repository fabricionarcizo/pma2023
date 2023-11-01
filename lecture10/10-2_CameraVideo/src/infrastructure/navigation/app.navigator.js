import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CameraScreen } from "../../screens/camera/camera.screen";
import { VideoScreen } from "../../screens/video/video.screen";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="Camera" component={CameraScreen} />
    <Stack.Screen name="Video" component={VideoScreen} />
  </Stack.Navigator>
);
