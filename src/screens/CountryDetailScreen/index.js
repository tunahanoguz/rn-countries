import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { ScreenSafeContainer, ScreenHeader } from '../../components';
import { fetchSingleCountryByCode } from '../../axiosInstance';

function CountryDetailScreen({ route }) {
  const [country, setCountry] = useState({});
  const [error, setError] = useState('');

  const countryCode = route.params.code;

  useEffect(() => {
    fetchSingleCountryByCode(countryCode)
      .then((country) => setCountry(country))
      .catch((err) => setError(err));
  }, []);

  if (Object.keys(country).length !== 0) {
    return (
      <ScreenSafeContainer>
        <ScreenHeader title={country.name} />
      </ScreenSafeContainer>
    );
  } else if (error !== '') {
    return (
      <ScreenSafeContainer>
        <ScreenHeader title="Error" />
        <Text>Country cannot be fetched.</Text>
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

export default CountryDetailScreen;
