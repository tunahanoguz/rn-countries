import React, { useState, useEffect } from 'react';
import { ScrollView, Text, ActivityIndicator } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  ScreenSafeContainer,
  ScreenHeader,
  DetailItem,
} from '../../components';
import { fetchSingleCountryByCode } from '../../axiosInstance';

function CountryDetailScreen({ route }) {
  const [country, setCountry] = useState({});
  const [error, setError] = useState('');

  const countryCode = route.params.code;

  const statusBarHeight = getStatusBarHeight();

  useEffect(() => {
    fetchSingleCountryByCode(countryCode)
      .then((country) => setCountry(country))
      .catch((err) => setError(err));
  }, []);

  function LanguageList() {
    return country.languages.map((language, index) => (
      <DetailItem
        key={`language-${index}`}
        scoreTitle={`Language ${index + 1}`}
        scoreDescription={language.name}
      />
    ));
  }

  function CurrencyList() {
    return country.currencies.map((currency, index) => (
      <DetailItem
        key={`currency-${index}`}
        scoreTitle={`Currency ${index + 1}`}
        scoreDescription={currency.name}
      />
    ));
  }

  function TimezoneList() {
    return country.timezones.map((timezone, index) => (
      <DetailItem
        key={`timezone-${index}`}
        scoreTitle={`Timezone ${index + 1}`}
        scoreDescription={timezone}
      />
    ));
  }

  function BorderList() {
    return country.borders.map((border, index) => (
      <DetailItem
        key={`border-${index}`}
        scoreTitle={`Border ${index + 1}`}
        scoreDescription={border}
      />
    ));
  }

  if (Object.keys(country).length !== 0) {
    return (
      <ScrollView style={{ paddingTop: statusBarHeight }}>
        <ScreenHeader title={country.name} isExistPadding={true} />

        <DetailItem
          scoreTitle="Native Name"
          scoreDescription={country.nativeName}
        />
        <DetailItem scoreTitle="Capital" scoreDescription={country.capital} />
        <DetailItem scoreTitle="Region" scoreDescription={country.region} />
        <DetailItem
          scoreTitle="Subregion"
          scoreDescription={country.subregion}
        />

        <LanguageList />

        <CurrencyList />

        <TimezoneList />

        <BorderList />
      </ScrollView>
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
