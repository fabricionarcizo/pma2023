import { EventEmitter } from "fbemitter";

import * as Location from "expo-location";

let locationWatchId = null;

export const locationEventsEmitter = new EventEmitter();

export const startLocationTask = async () => {
  let { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus !== "granted") {
    console.log("Permission to access location was denied.");
    return;
  }

  console.log("Starting location watch.");
  locationWatchId = await Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.BestForNavigation,
    },
    (location) => {
      locationEventsEmitter.emit("location", location);
    }
  );
};

export const stopLocationTask = async () => {
  console.log("Stopping location task.");
  if (locationWatchId) {
    locationWatchId.remove();
    locationEventsEmitter.emit("location", null);
  }
};
