import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar {...props} />
    </View>
  );
}

export default CustomStatusBar;
