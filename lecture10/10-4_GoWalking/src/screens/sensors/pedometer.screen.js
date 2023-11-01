import React, { useContext } from "react";

import { PedometerContext } from "../../services/sensors/pedometer.context";
import { Spacer } from "../../components/spacer.component";

import {
  PedometerView,
  PedometerInfo,
  PedometerProgress,
  ButtonsView,
  AppButton,
} from "./pedometer.style";

export const PedometerScreen = () => {
  const {
    isPedometerAvailable,
    isRunning,
    pastStepCount,
    currentStepCount,
    startPedometer,
    stopPedometer,
    resetStepCount,
  } = useContext(PedometerContext);

  return (
    <PedometerView>
      {isPedometerAvailable ? (
        <>
          <PedometerProgress value={currentStepCount - pastStepCount} />
          <Spacer size="large" />
          <Spacer size="large" />
          <ButtonsView>
            {isRunning ? (
              <AppButton icon="stop" onPress={() => stopPedometer()}>
                Stop
              </AppButton>
            ) : (
              <AppButton icon="play" onPress={() => startPedometer()}>
                Play
              </AppButton>
            )}
            <Spacer size="large" position="left" />
            <AppButton icon="sync" onPress={() => resetStepCount()}>
              Reset
            </AppButton>
          </ButtonsView>
        </>
      ) : (
        <PedometerInfo>Pedometer is not available</PedometerInfo>
      )}
    </PedometerView>
  );
};
