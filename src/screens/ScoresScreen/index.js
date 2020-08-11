import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OnlineScoresScreen from '../OnlineScoresScreen';
import OfflineScoresScreen from '../OfflineScoresScreen';
import { CustomStatusBar } from '../../components';

function ScoresScreen() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'online', title: 'Online Games' },
    { key: 'offline', title: 'Offline Games' },
  ]);

  const renderScene = SceneMap({
    online: OnlineScoresScreen,
    offline: OfflineScoresScreen,
  });

  const initialLayout = { width: Dimensions.get('window').width };

  function TabBarComponent(props) {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
      />
    );
  }

  const isFocused = useIsFocused();

  return (
    <View style={{ flex: 1 }}>
      {isFocused && (
        <CustomStatusBar barStyle="light-content" backgroundColor="black" />
      )}

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={TabBarComponent}
      />
    </View>
  );
}

export default ScoresScreen;
