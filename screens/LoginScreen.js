// screens/LoginScreen.js
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('LoginOfficial'); // Corrigido para navegar para "LoginOfficial"
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logotipo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Entrar no app</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleSignupPress}>
        <Text style={[styles.buttonText, styles.signupText]}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#00aaff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#fff',
    borderColor: '#00aaff',
    borderWidth: 2,
  },
  signupText: {
    color: '#00aaff',
  },
});

export default LoginScreen;
