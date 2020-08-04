import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CountriesScreen } from '../../screens';

function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CountriesScreen" component={CountriesScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
