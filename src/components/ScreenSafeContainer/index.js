import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

function ScreenSafeContainer({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

export default ScreenSafeContainer;
