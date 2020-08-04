import React from 'react';
import { View } from 'react-native';
import styles from './styles';

function ScreenContainer({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default ScreenContainer;
