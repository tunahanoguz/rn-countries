import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  CountriesScreen,
  CountryDetailScreen,
  QuizScreen,
} from '../../screens';

function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CountriesScreen"
        component={CountriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CountryDetailScreen"
        component={CountryDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
