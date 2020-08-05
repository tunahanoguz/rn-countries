import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import auth from '@react-native-firebase/auth';
import { ScreenSafeContainer, HomeButton } from '../../components';
import HomeButtonContainer from '../../components/HomeButtonContainer';

function HomeScreen({ navigation }) {
  const statusBarHeight = getStatusBarHeight();

  function goToCountriesScreen() {
    navigation.navigate('Home', { screen: 'CountriesScreen' });
  }

  function goToTestScreen() {
    navigation.navigate('Home', { screen: 'QuizScreen' });
  }

  function signOut() {
    auth().signOut();
  }

  return (
    <ScreenSafeContainer
      style={{ justifyContent: 'space-between', marginTop: statusBarHeight }}>
      <HomeButtonContainer>
        <HomeButton
          text="Show countries"
          firstColor="#667eea"
          secondColor="#764ba2"
          func={goToCountriesScreen}
        />
      </HomeButtonContainer>

      <HomeButtonContainer>
        <HomeButton
          text="Show scores"
          firstColor="#2af598"
          secondColor="#009efd"
          func={goToTestScreen}
        />
      </HomeButtonContainer>

      <HomeButtonContainer>
        <HomeButton
          text="Show ratings"
          firstColor="#6a11cb"
          secondColor="#2575fc"
          func={goToCountriesScreen}
        />
      </HomeButtonContainer>

      <HomeButtonContainer>
        <HomeButton
          text="Sign Out"
          firstColor="#ff0844"
          secondColor="#ffb199"
          func={signOut}
        />
      </HomeButtonContainer>
    </ScreenSafeContainer>
  );
}

export default HomeScreen;
