import React from "react";
import {View, StyleSheet} from "react-native";

const Spacer = ({children}) => {
  return <View style={styles.spacer}>{children}</View>
};

const styles = StyleSheet.create({
  spacer: {
    margin: 10,
    marginBottom: 30
  }
});

export default Spacer;