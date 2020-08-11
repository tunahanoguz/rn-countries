import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeNavigation from '../HomeNavigation';
import ScoreNavigation from '../ScoreNavigation';
import RatingNavigation from '../RatingNavigation';
import SettingsNavigation from '../SettingsNavigation';

function TabNavigation() {
  const Tab = createBottomTabNavigator();

  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    return routeName !== 'QuizScreen';
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarVisible: getTabBarVisibility(route),
        })}
      />

      <Tab.Screen
        name="Scores"
        component={ScoreNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="activity" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Ratings"
        component={RatingNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="trending-up" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsNavigation}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
