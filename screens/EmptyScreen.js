// screens/EmptyScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const EmptyScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Logo');
    }, 2000); // Tempo de simulação de 2 segundos
  }, [navigation]);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default EmptyScreen;
