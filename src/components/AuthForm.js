import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({title, errorMassage, buttonText, onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, serPassword] = useState('');

  return <>
    <Spacer>
      <Text h3>{title}</Text>
    </Spacer>
    <Input 
      label="Email" 
      value={email} 
      onChangeText={(value) => setEmail(value)}
      autoCapitalize="none"
      autoCorrect={false}
    />
    <Spacer/>
    <Input 
      secureTextEntry
      label="Password" 
      value={password} 
      onChangeText={(value) => serPassword(value)}
      autoCapitalize="none"
      autoCorrect={false}
    />
    <Spacer>
      {!!errorMassage && <Text style={styles.errorMassage}>{errorMassage}</Text>}
      <Button title={buttonText} onPress={() => onSubmit({email, password})}/>
    </Spacer>
  </>
};

const styles = StyleSheet.create({
  errorMassage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 15
  }
});

export default AuthForm;