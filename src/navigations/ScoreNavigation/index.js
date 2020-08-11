import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScoresScreen } from '../../screens';

function ScoreNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScoresScreen"
        component={ScoresScreen}
        options={{ headerShown: false }}
      />
      {/*<Stack.Screen*/}
      {/*    name="ScoreDetailScreen"*/}
      {/*    component={ScoreDetailScreen}*/}
      {/*    options={{ headerShown: false }}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
}

export default ScoreNavigation;
