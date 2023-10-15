import React, { useContext, useEffect, useState } from "react";
import { Circle, Marker } from "react-native-maps";
import { getDistance } from "geolib";

import { LocationContext } from "../../services/location/location.context";

class pointOfInterest {
  constructor(coords, info) {
    this.coords = coords;
    this.info = info;
    this.distance = 99999;
  }
}

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

const RADIUS = 300;

const orderDistanceArray = (coords) => {
  pointsOfInterest.forEach((poi) => {
    poi.distance = getDistance(coords, poi.coords, (accuracy = 1));
  });

  pointsOfInterest.sort((p1, p2) => {
    if (p1.distance < p2.distance) return -1;
    if (p1.distance > p2.distance) return 1;
    return 0;
  });
};

export const MapsMarkers = () => {
  const { location } = useContext(LocationContext);

  const [inZone, setInZone] = useState(false);

  useEffect(() => {
    if (location) {
      orderDistanceArray({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setInZone(pointsOfInterest[0].distance < RADIUS);
    } else {
      setInZone(false);
    }
  }, [location]);

  return (
    <>
      {pointsOfInterest.map((poi, index) => (
        <React.Fragment
          key={`${index}:${poi.coords.latitude}:${poi.coords.longitude}`}
        >
          <Marker
            key={`${inZone}:${poi.coords.latitude}:${poi.coords.longitude}`}
            coordinate={poi.coords}
            title={poi.info}
            pinColor={index == 0 && inZone ? "green" : "tomato"}
            tracksViewChanges={true}
          />
          <Circle
            center={poi.coords}
            radius={RADIUS}
            strokeColor={index == 0 && inZone ? "green" : "tomato"}
            fillColor={"rgba(230, 238, 255, 0.5)"}
          />
        </React.Fragment>
      ))}
    </>
  );
};
