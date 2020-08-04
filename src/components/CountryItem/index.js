import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';
import PropTypes from 'prop-types';
import styles from './styles';

function CountryItem({ navigation, code, name }) {
  function goToCountryDetail() {
    navigation.navigate('Home', {
      screen: 'CountryDetailScreen',
      params: { code },
    });
  }

  return (
    <TouchableOpacity onPress={goToCountryDetail} style={styles.item}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

CountryItem.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CountryItem;
