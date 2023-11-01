import React, { createContext, useEffect, useState } from "react";
import { Vibration } from "react-native";

import {
  isAvailable,
  setFast,
  subscribe,
  unsubscribe,
} from "./accelerometer.service";

export const AccelerometerContext = createContext();

export const AccelerometerContextProvider = ({ children }) => {
  const [isAccelerometerAvailable, setIsAccelerometerAvailable] =
    useState(false);
  const [subscription, setSubscription] = useState(null);
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    (async () => {
      isAvailable().then((result) => {
        setIsAccelerometerAvailable(result);
        setFast();
        const subscription = subscribe(setData);
        setSubscription(subscription);
      });

      return () => unsubscribe(subscription);
    })();
  }, []);

  useEffect(() => {
    const acceleration = Math.sqrt(x * x + y * y + z * z);
    if (acceleration > 3) {
      Vibration.vibrate(1000);
    }
  }, [x, y, z]);

  return (
    <AccelerometerContext.Provider
      value={{ isAccelerometerAvailable, x, y, z }}
    >
      {children}
    </AccelerometerContext.Provider>
  );
};
