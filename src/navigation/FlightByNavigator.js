import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FlexibleFlight from '../screens/Flight/FlightBy/FlexibleFlight';
import FlightResultsOnwards from '../screens/Flight/FlightBy/FlightResultsOnwards';
import FlightResultsReturn from '../screens/Flight/FlightBy/FlightResultsReturn';
import ScreenSettings from './ScreenSettings';
import ReviewItinerary from '../screens/Flight/FlightBy/ReviewItinerary';
const Stack = createStackNavigator();

const FlightBy = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      gestureEnabled: true,
      ...ScreenSettings,
    }}>
    <Stack.Screen name={'FlexibleFlight'} component={FlexibleFlight} />
    <Stack.Screen
      name={'FlightResultsOnwards'}
      component={FlightResultsOnwards}
    />
    <Stack.Screen
      name={'FlightResultsReturn'}
      component={FlightResultsReturn}
    />
    <Stack.Screen
      name={'ReviewItineraryFlightBy'}
      component={ReviewItinerary}
    />
  </Stack.Navigator>
);

export default FlightBy;
