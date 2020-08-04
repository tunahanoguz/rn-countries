import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

function HomeButton({ text, firstColor, secondColor, func }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[firstColor, secondColor]}
      style={styles.container}>
      <TouchableOpacity onPress={func} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

HomeButton.propTypes = {
  text: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  secondColor: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default HomeButton;
