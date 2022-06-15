import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home/index.jsx';
import Message from './screens/Message/index.jsx';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='I am Rich'
          component={Home}
          options={{headerStyle: {backgroundColor: 'black', color: 'grey'}}}/>
        <Stack.Screen name='Message' component={Message} options={{headerStyle: {backgroundColor: 'black', color: 'grey'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
