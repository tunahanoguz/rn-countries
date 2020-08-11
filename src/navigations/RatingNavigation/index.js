import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RatingsScreen, AllRatingsScreen } from '../../screens';

function RatingNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RatingsScreen"
        component={RatingsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AllRatingsScreen"
        component={AllRatingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RatingNavigation;
