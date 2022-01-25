import React, {useContext} from "react";
import {StyleSheet, Text} from "react-native";
import {SafeAreaView} from "react-navigation";
import {Button} from "react-native-elements";
import {FontAwesome} from '@expo/vector-icons';
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const AccountScreen = () => {
  const {signOut} = useContext(AuthContext);

  return <SafeAreaView forceInset={{top: 'always'}}>
    <Spacer>
      <Text style={{fontSize: 48}}>AccountScreen</Text>
    </Spacer>
    <Spacer>
      <Button title="Sign out" onPress={signOut}/>
    </Spacer>
  </SafeAreaView>
};

AccountScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="user" size={20} color="black" />
};

const styles = StyleSheet.create({});

export default AccountScreen;