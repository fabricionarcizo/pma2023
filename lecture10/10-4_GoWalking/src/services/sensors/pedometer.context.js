import React, { createContext, useEffect, useState } from "react";

import { isAvailable, subscribe, unsubscribe } from "./pedometer.service";

export const PedometerContext = createContext();

export const PedometerContextProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    (async () => {
      isAvailable().then((result) => {
        setIsPedometerAvailable(result);
        const subscription = subscribe(setCurrentStepCount);
        setSubscription(subscription);
        subscription && setIsRunning(true);
      });

      return () => stopPedometer();
    })();
  }, []);

  const startPedometer = () => {
    if (isPedometerAvailable) {
      setPastStepCount(0);
      setCurrentStepCount(0);
      const subscription = subscribe(setCurrentStepCount);
      setSubscription(subscription);
      subscription && setIsRunning(true);
    }
  };

  const stopPedometer = () => {
    setIsRunning(false);
    unsubscribe(subscription);
  };

  const resetStepCount = () => {
    setPastStepCount(currentStepCount);
  };

  return (
    <PedometerContext.Provider
      value={{
        isPedometerAvailable,
        isRunning,
        pastStepCount,
        currentStepCount,
        startPedometer,
        stopPedometer,
        resetStepCount,
      }}
    >
      {children}
    </PedometerContext.Provider>
  );
};
