import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 10,
    padding: 20,
    backgroundColor: 'tomato',
    borderRadius: 8,
  },
  leftScoreItem: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 22,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

export default styles;
