import React, {useContext} from "react";
import {StyleSheet, ActivityIndicator} from "react-native";
import MapView, {Polyline, Circle} from "react-native-maps";
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
  const {state: {currentLocation, locations}} = useContext(LocationContext);

  if(!currentLocation) {
    return <ActivityIndicator size="large" style={styles.indicator}/>
  }

  return <MapView 
    style={styles.map}
    initialRegion={{
      ...currentLocation.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <Circle
      center={currentLocation.coords}
      radius={15}
      fillColor="rgba(158, 158, 255, 0.3)"
      strokeColor="rgba(158, 158, 255, 1.0)"
    />
    <Polyline coordinates={locations.map(loc=>loc.coords)}/>
  </MapView>
};

const styles = StyleSheet.create({
  map: {
    height: 300
  },
  indicator: {
    marginTop: 200
  }
});

export default Map;