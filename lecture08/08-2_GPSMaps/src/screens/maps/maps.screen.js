import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";
import { Marker } from "react-native-maps";

import * as Location from "expo-location";

import {
  Maps,
  MenuView,
  MenuHeading,
  MenuButton,
  LayersButton,
  LocationButton,
} from "./maps.style";

// Defining our own "type" called `pointOfInterest`.
class pointOfInterest {
  constructor(coordinates, info) {
    this.coordinates = coordinates; // Latitude and longitude.
    this.info = info; // Short string to describe the location.
  }
}

export const MapsScreen = () => {
  const [mapType, setMapType] = useState("standard");
  const [showsUserLocation, setShowsUserLocation] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const pointsOfInterest = [
    new pointOfInterest(
      { latitude: 55.6594956, longitude: 12.5886724 },
      "Kaj Munks Vej 14"
    ),
    new pointOfInterest(
      { latitude: 55.67793, longitude: 12.57667 },
      "Hyskenstræde 16"
    ),
    new pointOfInterest(
      { latitude: 55.68643, longitude: 12.57989 },
      "Georg Brandes Pl. 8"
    ),
    new pointOfInterest(
      { latitude: 55.65884, longitude: 12.55526 },
      "Vasbygade 10"
    ),
    new pointOfInterest(
      { latitude: 55.66562, longitude: 12.59496 },
      "Amagerfælledvej 27"
    ),
    new pointOfInterest(
      { latitude: 55.66298, longitude: 12.61205 },
      "Moselgade 2"
    ),
    new pointOfInterest(
      { latitude: 55.689628, longitude: 12.55231 },
      "Kapelvej 4"
    ),
    new pointOfInterest(
      { latitude: 55.679041, longitude: 12.568569 },
      "Sankt Peders Stræde 18"
    ),
    new pointOfInterest(
      { latitude: 55.679229, longitude: 12.572914 },
      "Nørregade 8"
    ),
  ];

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
        {pointsOfInterest.map((p, index) => (
          <Marker key={index} coordinate={p.coordinates} title={p.info} />
        ))}
      </Maps>
      <MenuView>
        <MenuHeading>GPSMaps App</MenuHeading>
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
