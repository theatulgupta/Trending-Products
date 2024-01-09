import { StyleSheet, Text, View } from 'react-native'

import Details from './screens/Details';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: "Trending Products" }} />
        <Stack.Screen
          name='Details'
          component={Details} options={{
            title: "Product Details",
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})