//import "../_mockLocation";
import React, {useContext, useCallback} from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView, withNavigationFocus} from "react-navigation";
import {Text} from "react-native-elements";
import {FontAwesome} from '@expo/vector-icons';
import {Context as LocationContext} from '../context/LocationContext';
import Map from '../components/Map';
import Spacer from "../components/Spacer";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({isFocused}) => {
  const {state: {recording}, addLocation} = useContext(LocationContext);
  const callback = useCallback(location => {
    addLocation(location, recording)
  }, [recording])

  const [err] = useLocation(isFocused || recording, callback);

  return <SafeAreaView forceInset={{top: 'always'}}>
    <Spacer>
      <Text h2>Create Track</Text>
    </Spacer>
    <Map/>
    {!!err && <Text>Please enable location services</Text>}
    <TrackForm/>
  </SafeAreaView>
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} color="black" />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);