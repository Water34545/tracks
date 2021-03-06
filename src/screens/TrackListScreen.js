import React, {useContext} from "react";
import {View, FlatList, TouchableOpacity} from "react-native";
import {ListItem} from "react-native-elements"
import {NavigationEvents} from "react-navigation";
import {Context as TrakContext} from "../context/TrackContext";

const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrakContext);
  return <View>
    <NavigationEvents onWillFocus={fetchTracks}/>
    <FlatList
      data={state}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
            <ListItem>
              <ListItem.Content>
                 <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        );
      }}
    />
  </View>
};

TrackListScreen.navigationOptions = {
  title: "Tracks",
};

export default TrackListScreen;