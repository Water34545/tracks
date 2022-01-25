import React, {useContext, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SignInScreen = () => {
  const {state, signIn, clearErrorMessage} = useContext(AuthContext);

  return <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage}/>
    <AuthForm
      title="Sign In to your account"
      errorMassage={state.errorMassage}
      buttonText="Sign In"
      onSubmit={signIn}
    />
    <NavLink 
      text="Don't have an account? Sign up instead."
      routeName="SignUp"
    />
  </View>
};

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;