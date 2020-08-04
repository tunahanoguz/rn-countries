import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { ScreenSafeContainer } from '../../components';
import { fetchAllCountries } from '../../axiosInstance';

function CountriesScreen() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllCountries()
      .then((allCountries) => setCountries(allCountries))
      .catch((err) => setError(err));
  }, []);

  if (countries.length !== 0) {
    return <ScreenSafeContainer>{console.log(countries)}</ScreenSafeContainer>;
  } else if (error !== '') {
    return (
      <ScreenSafeContainer>
        <Text>Countries cannot be fetched.</Text>
      </ScreenSafeContainer>
    );
  } else {
    return (
      <ScreenSafeContainer>
        <ActivityIndicator />
      </ScreenSafeContainer>
    );
  }
}

export default CountriesScreen;
