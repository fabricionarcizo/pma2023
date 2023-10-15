const toDegreesMinutesAndSeconds = (coordinate) => {
  var absolute = Math.abs(coordinate);
  var degrees = Math.floor(absolute);
  var minutesNotTruncated = (absolute - degrees) * 60;
  var minutes = Math.floor(minutesNotTruncated);
  var seconds = ((minutesNotTruncated - minutes) * 60).toFixed(5);
  return `${degrees}˚ ${minutes}' ${seconds}"`;
};

export const latitudeToDMS = (lat) => {
  var latitude = toDegreesMinutesAndSeconds(lat);
  var latitudeCardinal = lat >= 0 ? "N" : "S";
  return `${latitude} ${latitudeCardinal}`;
};

export const longitudeToDMS = (lng) => {
  var longitude = toDegreesMinutesAndSeconds(lng);
  var longitudeCardinal = lng >= 0 ? "E" : "W";
  return `${longitude} ${longitudeCardinal}`;
};
