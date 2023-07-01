import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Platform, Dimensions } from 'react-native';
import Welcomsc from "../Board/app/screens/Welcomsc";
import Speed from './app/screens/Speed';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Devices from './app/screens/Devices';

const Stack= createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcomsc} />
      <Stack.Screen name="Devices" component={Devices} />
      <Stack.Screen name="Speed" component={Speed} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



