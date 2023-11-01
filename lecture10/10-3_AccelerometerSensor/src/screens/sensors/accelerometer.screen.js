import React, { useContext } from "react";

import { colors } from "../../infrastructure/theme/colors";
import { AccelerometerContext } from "../../services/sensors/accelerometer.context";
import { Spacer } from "../../components/spacer.component";

import {
  AccelerometerView,
  AccelerometerInfo,
  AccelerometerProgress,
} from "./accelerometer.style";

export const AccelerometerScreen = () => {
  const { isAccelerometerAvailable, x, y, z } =
    useContext(AccelerometerContext);

  return (
    <AccelerometerView>
      {isAccelerometerAvailable ? (
        <>
          <AccelerometerProgress
            value={x}
            title={"X-Axis"}
            activeStrokeColor={colors.ui.primary}
            inActiveStrokeColor={colors.ui.primary}
          />
          <Spacer size="large" />
          <AccelerometerProgress
            value={y}
            title={"Y-Axis"}
            activeStrokeColor={colors.ui.secondary}
            inActiveStrokeColor={colors.ui.secondary}
          />
          <Spacer size="large" />
          <AccelerometerProgress
            value={z}
            title={"Z-Axis"}
            activeStrokeColor={colors.ui.tertiary}
            inActiveStrokeColor={colors.ui.tertiary}
          />
        </>
      ) : (
        <AccelerometerInfo>Accelerometer is not available</AccelerometerInfo>
      )}
    </AccelerometerView>
  );
};
