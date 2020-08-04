import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

function App() {
  return (
      <View style={styles.container}>
        <Text>React Native Countries List</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
