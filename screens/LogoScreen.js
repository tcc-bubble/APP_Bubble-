// screens/LogoScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const LogoScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Loaded');
    }, 2000); // Tempo de simulação de 2 segundos
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/simbolo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.appName}>BUBBLE +</Text>
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
  },
  appName: {
    
    fontWeight: 'Bold',
    fontSize: 20,
    marginTop: 10,
    color:'#04ACD4',

  },
});

export default LogoScreen;
