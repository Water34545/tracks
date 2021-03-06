import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SignUpScreen = () => {
  const {state, signUp, clearErrorMessage} = useContext(AuthContext);

  return <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage}/>
    <AuthForm
      title="Sign Up for Tracker"
      errorMassage={state.errorMassage}
      buttonText="Sign Up"
      onSubmit={signUp}
    />
    <NavLink 
      text="Already have an account? Sign in instead."
      routeName="SignIn"
    />
  </View>
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignUpScreen;