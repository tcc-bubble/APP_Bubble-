import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function SignupScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'RumRaisin': require('../assets/fonts/RumRaisin-Regular.ttf'),
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implementar lógica de cadastro aqui
    console.log('Implementar lógica de cadastro');
  };

  if (!fontsLoaded) {
    return null; // Or some kind of loading indicator
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContent}>
        <Image source={require('../assets/image2-cadastro.png')} style={styles.image} />

        <Text style={styles.welcomeText}>Preencha os campos abaixo para melhor experiência.</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="gray"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="gray"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.orText}>ou cadastre-se com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={() => {}}>
            <Image source={require('../assets/img_google.png')} style={styles.socialIcon} />
            <Text style={[styles.socialButtonText, styles.googleButtonText]}>Cadastre-se com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={() => {}}>
            <Ionicons name="logo-facebook" size={24} color="#fff" style={styles.socialIcon} />
            <Text style={[styles.socialButtonText, styles.facebookButtonText]}>Cadastre-se com Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Image source={require('../assets/Logotipo.png')} style={styles.footerImage} />
        <Text style={styles.footerText}>Bubble +</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily: 'RumRaisin'
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  signupButton: {
    backgroundColor: '#03A9F4',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
  },
  googleButton: {
    borderColor: '#03A9F4', // Mesma cor que o botão "Cadastre-se"
  },
  googleButtonText: {
    color: 'gray', // Cor do texto do botão do Google
  },
  facebookButton: {
    backgroundColor: '#03A9F4', // Cor de fundo alterada para igual ao botão "Cadastre-se"
    borderColor: '#03A9F4',
  },
  facebookButtonText: {
    color: '#fff', // Cor do texto do botão do Facebook
  },
  socialButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerImage: {
    width: 50,
    height: 50,
    marginRight: 10, // Adiciona espaço entre a imagem e o texto
  },
  footerText: {
    color: '#03A9F4',
    fontSize: 20,
    fontFamily: 'RumRaisin', // Fonte Rum Raisin
  },
});
