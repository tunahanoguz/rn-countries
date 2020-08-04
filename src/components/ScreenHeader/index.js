import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ScreenTitle from '../ScreenTitle';
import styles from './styles';

function ScreenHeader({ title }) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <ScreenTitle>{title}</ScreenTitle>
      <Icon name="arrow-left" size={26} />
    </TouchableOpacity>
  );
}

ScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ScreenHeader;
