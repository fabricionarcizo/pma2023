import React, { useEffect, useState, createContext } from "react";

import { locationEventsEmitter, startLocationTask } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("N/A");

  useEffect(() => {
    startLocationTask();
  }, []);

  locationEventsEmitter.addListener("location", (location) => {
    setLocation(location);
  });

  locationEventsEmitter.addListener("address", (address) => {
    setAddress(address);
  });

  return (
    <LocationContext.Provider value={{ address, location }}>
      {children}
    </LocationContext.Provider>
  );
};
