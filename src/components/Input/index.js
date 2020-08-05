import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Input({ placeholder, value, setValue, keyboardType, secureText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setValue(text)}
      autoCapitalize="none"
      keyboardType={keyboardType}
      secureTextEntry={secureText}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  secureText: PropTypes.bool,
};

Input.defaultProps = {
  secureText: false,
};

export default Input;
