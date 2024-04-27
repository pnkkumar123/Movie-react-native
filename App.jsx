import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen from './Screens/Screen';
import Resturant from './Screens/Resturant';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Screen' component={Screen}/>
      <Stack.Screen name='Resturant' component={Resturant}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App