// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    'RumRaisin': require('../assets/fonts/RumRaisin-Regular.ttf'),
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (!fontsLoaded) {
    return null; // Ou algum tipo de indicador de carregamento
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          <Image source={require('../assets/image1-login.png')} style={styles.formImage} />
          <Text style={styles.title}>Seja Bem Vindo!</Text>
          <Text style={styles.subtitle}>Vamos fazer login para continuar</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="#04ACD4" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email ou Telefone"
              placeholderTextColor="#777"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#04ACD4" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#777"
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="#04ACD4" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupLink} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLinkText}>Não tem conta? Crie uma conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={styles.footer}>
        <Image source={require('../assets/Logotipo.png')} style={styles.footerImage} />
        <Text style={styles.footerText}>Bubble +</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3e5fc',
  },
  header: {
    backgroundColor: '#03A9F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  formImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'RumRaisin', // Adicionado para mudar a fonte
    fontSize: 25,
    
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#03A9F4',
  },
  loginButton: {
    backgroundColor: '#03A9F4',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupLink: {
    marginTop: 20,
  },
  signupLinkText: {
    color: '#03A9F4',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row', // Adicionado para alinhar logo e texto lado a lado
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerImage: {
    width: 50,
    height: 50,
    marginRight: 10, // Espaço entre a logo e o texto
  },
  footerText: {
    color: '#03A9F4',
    fontSize: 20,
    fontFamily: 'RumRaisin', // Adicionado para mudar a fonte
  },
});

export default LoginScreen;
