import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";

import * as Location from "expo-location";

import {
  startLocationTask,
  stopLocationTask,
} from "../../services/location/location.service";

import { MapsMarkers } from "./maps.fencing";
import {
  Maps,
  MenuView,
  MenuHeading,
  MenuButton,
  LayersButton,
  LocationButton,
} from "./maps.style";

export const MapsScreen = () => {
  const [mapType, setMapType] = useState("standard");
  const [showsUserLocation, setShowsUserLocation] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    if (showsUserLocation) {
      startLocationTask();
    } else {
      stopLocationTask();
    }
  }, [showsUserLocation]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
    })();
  }, []);

  return (
    <PaperProvider>
      <Maps
        initialRegion={{
          // ITU's coordinates.
          latitude: 55.6596,
          longitude: 12.591,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType={mapType}
        showsUserLocation={showsUserLocation}
      >
        <MapsMarkers />
      </Maps>
      <MenuView>
        <MenuHeading>GeoFencing App</MenuHeading>
        <MenuButton icon="menu" size={20} onPress={showDialog} />
      </MenuView>
      <LayersButton
        icon="layers"
        size="small"
        onPress={() => {
          setMapType(mapType === "hybrid" ? "standard" : "hybrid");
        }}
      />
      <LocationButton
        icon="crosshairs-gps"
        size="small"
        onPress={() => {
          setShowsUserLocation(!showsUserLocation);
        }}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Menu and dialog examples</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};
