import * as Location from 'expo-location';

const tenMeetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timetamp: 10000000,
    coords: {
      longitude: -122.0312186 + increment*tenMeetersWithDegrees,
      latitude: 37.33233141 + increment*tenMeetersWithDegrees,
      altitude: 5,
      altitudeAccuracy: 5,
      accuracy: 5,
      heading: 0,
      speed: 0
    }
  }
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged',{
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);