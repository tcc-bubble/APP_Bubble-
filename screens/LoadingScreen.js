// screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula um tempo de carregamento antes de navegar para a próxima tela
    setTimeout(() => {
      navigation.navigate('Loaded');
    }, 3000); // Tempo de simulação de 3 segundos
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00aaff" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    color: '#00aaff',
    marginTop: 16,
  },
});

export default LoadingScreen;
