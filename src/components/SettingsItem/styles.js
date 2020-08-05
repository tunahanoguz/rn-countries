import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    alignSelf: 'stretch',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  leftSettingItem: {
    flex: 0.8,
  },
  rightSettingItem: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  settingTitle: {
    fontSize: 16,
  },
  settingDescription: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  checkCircleOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 100,
  },
  checkCircleInner: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 100,
  },
});

export default styles;
