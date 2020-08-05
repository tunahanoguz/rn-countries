import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingsItem({ title, settings, state, setSettingState }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>

      <FlatList
        data={settings}
        renderItem={({ item, index }) => (
          <View style={styles.settingItem} key={index}>
            <View style={styles.leftSettingItem}>
              <Text style={styles.settingTitle}>{item.title}</Text>
              <Text style={styles.settingDescription}>{item.description}</Text>
            </View>

            <View style={styles.rightSettingItem}>
              <TouchableOpacity
                style={styles.checkCircleOuter}
                onPress={() => setSettingState(index)}>
                {state === index && <View style={styles.checkCircleInner} />}
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

SettingsItem.propTypes = {
  title: PropTypes.string.isRequired,
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  state: PropTypes.number.isRequired,
  setSettingState: PropTypes.func.isRequired,
};

export default SettingsItem;
