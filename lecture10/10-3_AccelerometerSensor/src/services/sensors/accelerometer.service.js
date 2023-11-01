import { Accelerometer } from "expo-sensors";

export const isAvailable = async () => {
  return await Accelerometer.isAvailableAsync();
};

export const setSlow = () => Accelerometer.setUpdateInterval(1000);

export const setFast = () => Accelerometer.setUpdateInterval(33);

export const subscribe = (setData) => {
  return Accelerometer.addListener(setData);
};

export const unsubscribe = (subscription) => {
  subscription && subscription.remove();
};
