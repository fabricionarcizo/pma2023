import React, { useState, createContext } from "react";

import { locationEventsEmitter } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  locationEventsEmitter.addListener("location", (location) => {
    setLocation(location);
  });

  return (
    <LocationContext.Provider value={{ location }}>
      {children}
    </LocationContext.Provider>
  );
};
