import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from '../HomeNavigation';
import SettingsNavigation from '../SettingsNavigation';

function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Settings" component={SettingsNavigation} />
      <Tab.Screen name="Settings" component={SettingsNavigation} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
