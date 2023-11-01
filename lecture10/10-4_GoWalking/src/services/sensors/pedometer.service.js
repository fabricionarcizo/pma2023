import { Pedometer } from "expo-sensors";

export const isAvailable = async () => {
  return await Pedometer.isAvailableAsync();
};

export const subscribe = (setCurrentStepCount) => {
  return Pedometer.watchStepCount((result) => {
    setCurrentStepCount(result.steps);
  });
};

export const unsubscribe = (subscription) => {
  subscription && subscription.remove();
};
