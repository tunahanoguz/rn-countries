import React, { useState, useEffect } from 'react';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import {
  ScreenSafeContainer,
  ScreenHeader,
  CountryItem,
} from '../../components';
import { fetchAllCountries } from '../../axiosInstance';
import ScreenContainer from '../../components/ScreenContainer';

function CountriesScreen() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllCountries()
      .then((allCountries) => setCountries(allCountries))
      .catch((err) => setError(err));
  }, []);

  if (countries.length !== 0) {
    return (
      <ScreenSafeContainer style={{ padding: 0 }}>
        <ScreenHeader title="Countries" isExistPadding={true} />
        <FlatList
          data={countries}
          renderItem={({ item }) => (
            <CountryItem code={item.alpha3Code} name={item.name} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenSafeContainer>
    );
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
