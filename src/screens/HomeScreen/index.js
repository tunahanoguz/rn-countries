import React from 'react';
import { ScreenSafeContainer, HomeButton } from '../../components';
import HomeButtonContainer from '../../components/HomeButtonContainer';

function HomeScreen({ navigation }) {
  function goToCountriesScreen() {
    navigation.navigate('Home', { screen: 'CountriesScreen' });
  }

  return (
    <ScreenSafeContainer style={{ justifyContent: 'space-between' }}>
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
          func={goToCountriesScreen}
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
          func={goToCountriesScreen}
        />
      </HomeButtonContainer>
    </ScreenSafeContainer>
  );
}

export default HomeScreen;
