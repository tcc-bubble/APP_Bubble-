// screens/LoadedScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const LoadedScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'RumRaisin': require('../assets/fonts/RumRaisin-Regular.ttf'),
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // Tempo de simulação de 2 segundos
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // Ou algum tipo de indicador de carregamento
  }

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

export default LoadedScreen;
