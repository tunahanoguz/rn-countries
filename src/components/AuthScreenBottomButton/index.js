import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function AuthScreenBottomButton({ children, func }) {
  return (
    <TouchableOpacity onPress={func}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

AuthScreenBottomButton.propTypes = {
  func: PropTypes.func.isRequired,
};

export default AuthScreenBottomButton;
