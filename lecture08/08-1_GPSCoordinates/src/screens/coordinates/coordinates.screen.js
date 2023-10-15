import "react-native-gesture-handler";
import React, { useContext, useRef, useState } from "react";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { LocationContext } from "../../services/location/location.context";
import { SafeAreaTop, SafeArea } from "../../components/safe-area.component";
import { Spacer } from "../../components/spacer.component";
import { latitudeToDMS, longitudeToDMS } from "../../components/dms.component";

import {
  ContentCover,
  AccuracyContent,
  AccuracyHeading,
  AccuracyValue,
  CoordinatesContent,
  CoordinatesHeading,
  CoordinatesValue,
  CoordinatesDMS,
  AddressButton,
  AddressContent,
  AddressHeading,
  AddressValue,
} from "./coordinates.style";

export const CoordinatesScreen = () => {
  const { address, location } = useContext(LocationContext);

  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["21.5%"];

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  };

  return (
    <>
      <SafeAreaTop />
      <BottomSheetModalProvider>
        <SafeArea>
          <CoordinatesContent>
            <Spacer size="large">
              <CoordinatesHeading>Latitude (LAT)</CoordinatesHeading>
              <CoordinatesValue>
                {location ? location.coords.latitude.toFixed(5) : "N/A"}
              </CoordinatesValue>
              <CoordinatesDMS>
                {location ? latitudeToDMS(location.coords.latitude) : "N/A"}
              </CoordinatesDMS>
            </Spacer>
            <Spacer size="large">
              <CoordinatesHeading>Longitude (LNG)</CoordinatesHeading>
              <CoordinatesValue>
                {location ? location.coords.longitude.toFixed(5) : "N/A"}
              </CoordinatesValue>
              <CoordinatesDMS>
                {location ? longitudeToDMS(location.coords.longitude) : "N/A"}
              </CoordinatesDMS>
            </Spacer>
            <Spacer size="large" />
          </CoordinatesContent>
          <AccuracyContent>
            <Spacer size="large">
              <AccuracyHeading>Signal Accuracy</AccuracyHeading>
            </Spacer>
            <Spacer size="medium">
              <AccuracyValue>
                {location ? `${Math.round(location.coords.accuracy)} m` : "N/A"}
              </AccuracyValue>
            </Spacer>
          </AccuracyContent>
          <AddressButton icon="home" onPress={handlePresentModal} />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onDismiss={() => setIsOpen(false)}
          >
            <AddressContent>
              <AddressHeading>Current Address</AddressHeading>
              <AddressValue>{address}</AddressValue>
            </AddressContent>
          </BottomSheetModal>
        </SafeArea>
        {isOpen ? <ContentCover /> : null}
      </BottomSheetModalProvider>
    </>
  );
};
