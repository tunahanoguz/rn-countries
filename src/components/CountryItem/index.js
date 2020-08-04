import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';
import PropTypes from 'prop-types';
import styles from './styles';

function CountryItem({ navigation, code, flag, name }) {
  function goToCountryDetail() {
    navigation.navigate('Home', {
      screen: 'CountryDetailScreen',
      params: { code },
    });
  }

  return (
    <TouchableOpacity onPress={goToCountryDetail} style={styles.item}>
      {/*<Image source={{ uri: flag }} style={{ width: 50, height: 50 }} />*/}
      <View style={styles.flagContainer}>
        <SvgUri width={100} height={100} uri={flag} style={styles.flag} />
      </View>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

CountryItem.propTypes = {
  code: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CountryItem;
