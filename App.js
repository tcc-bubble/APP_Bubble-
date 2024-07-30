// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EmptyScreen from './screens/EmptyScreen';
import LogoScreen from './screens/LogoScreen';
import LoadedScreen from './screens/LoadedScreen';
import LoginScreen from './screens/LoginScreen';
import LoginOfficialScreen from './screens/LoginOfficialScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Empty" headerMode="none">
        <Stack.Screen name="Empty" component={EmptyScreen} />
        <Stack.Screen name="Logo" component={LogoScreen} />
        <Stack.Screen name="Loaded" component={LoadedScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginOfficial" component={LoginOfficialScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
