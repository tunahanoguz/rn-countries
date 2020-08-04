import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  flagContainer: {
    borderRadius: 8,
  },
  flag: {
    flex: 1,
    marginRight: 10,
  },
});

export default styles;
