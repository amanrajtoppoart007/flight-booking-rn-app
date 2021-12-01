import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResult from '../screens/Flight/Lcc/SearchResult';
import ScreenSettings from './ScreenSettings';
import AddServices from '../screens/Flight/Lcc/AddServices';
import AddSeats from '../screens/Flight/Lcc/AddSeats';

const Stack = createStackNavigator();

const LccNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'AddSeats'} component={AddSeats} />
    <Stack.Screen name={'AddServices'} component={AddServices} />
    <Stack.Screen name={'SearchResult'} component={SearchResult} />
  </Stack.Navigator>
);

export default LccNavigator;
