import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function BlockButton({ children, func }) {
  return (
    <TouchableOpacity style={styles.button} onPress={func}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

BlockButton.propTypes = {
  func: PropTypes.func.isRequired,
};

export default BlockButton;
