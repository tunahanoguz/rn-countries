import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

const styles = StyleSheet.create({
  statusBar: {
    height: statusBarHeight,
  },
});

export default styles;
