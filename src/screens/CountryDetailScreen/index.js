import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SvgXml } from 'react-native-svg';
import {
  ScreenSafeContainer,
  ScreenHeader,
  DetailItem,
} from '../../components';
import { fetchSingleCountryByCode } from '../../axiosInstance';

function CountryDetailScreen({ route }) {
  const [country, setCountry] = useState({});
  const [error, setError] = useState('');
  const [flag, setFlag] = useState('');

  const countryCode = route.params.code;

  // const screenWidth = Dimensions.get('window').width;
  const statusBarHeight = getStatusBarHeight();

  useEffect(() => {
    fetchSingleCountryByCode(countryCode)
      .then((country) => setCountry(country))
      .catch((err) => setError(err));
  }, []);

  function fetchFlag() {
    axios.get(country.flag).then((response) => {
      const data = response.data;
      const replacedData = data.replace(
        'width="600"',
        `width="600" viewBox="0 0 600 600"`,
      );
      setFlag(replacedData);
    });
  }

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
      <ScrollView
        style={{ paddingTop: statusBarHeight }}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title={country.name} isExistPadding={true} />

        {/*{flag !== '' && (*/}
        {/*  <View style={{ height: 280 }}>*/}
        {/*    <SvgXml xml={flag} width="100%" />*/}
        {/*  </View>*/}
        {/*)}*/}

        {/*{fetchFlag()}*/}

        {console.log(
          `https://www.countryflags.io/${country.topLevelDomain[0].substr(
            1,
          )}/64.png`,
        )}

        <Image
          source={{
            uri: `https://www.countryflags.io/${country.topLevelDomain[0].substr(
              1,
            )}/flat/64.png`,
          }}
          style={{
            alignSelf: 'center',
            width: 128,
            height: 128,
            marginTop: -30,
          }}
        />

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
