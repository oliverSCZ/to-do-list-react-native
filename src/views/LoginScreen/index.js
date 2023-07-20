import React from 'react';

import { View, Image, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style= {style.image}/>
      </View>
      <View style={style.inputsContainer}>
        <TextInput placeholder="user" style={style.textInput}/>
        <TextInput placeholder="password" style={style.textInput} secureTextEntry={true}/>
      </View>
      <Button style={style.button} title="Sign in"/>
    </View>
  );
};

const style = StyleSheet.create({
  image : {
    width : 70,
    height : 50,
    alignSelf: 'center',
  },
  imageContainer : {
    marginTop : 10,
    marginBottom : 10,
  },
  inputsContainer : {
  
  },
  textInput : {
    backgroundColor: '#FFFFFF',
    padding: 6,
    marginTop: 4,
    marginBottom: 12,
    fontSize: 16,
  },
  button : {
    backgroundColor : '#1976D2',
  },
  container : {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 18,
    marginRight: 18,
  },
});

export default LoginScreen;
