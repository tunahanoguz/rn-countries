import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthNavigation, TabNavigation } from './src/navigations';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
