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
      accuracy: Location.Accuracy.Highest,
      timeInterval: 5000,
      distanceInterval: 5,
      mayShowUserSettingsDialog: true,
    },
    (location) => {
      locationEventsEmitter.emit("location", location);

      Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      }).then((geoCode) => {
        if (geoCode.length) {
          let address =
            `${geoCode[0].name}\n` +
            `${geoCode[0].postalCode} ${geoCode[0].city}\n` +
            `${geoCode[0].region}, ${geoCode[0].country}`;
          locationEventsEmitter.emit("address", address);
        }
      });
    }
  );
};

export const stopLocationTask = async () => {
  console.log("Stopping location task.");
  if (locationWatchId) {
    locationWatchId.remove();
  }
};
