
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Model from './screen/Model'
import Picture from './screen/Picture';
import ModelDetiles from './screen/ModelDetiles';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="Picture" component={Picture} options={{ headerShown: false }}  ></Stack.Screen>
        <Stack.Screen name="Model" component={Model} options={{ headerShown: false}} ></Stack.Screen>
        <Stack.Screen name="ModelDetiles" component={ModelDetiles} options={{ headerShown: false}} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({




})

