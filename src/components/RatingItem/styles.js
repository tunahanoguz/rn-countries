import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    alignSelf: 'stretch',
    marginBottom: 10,
    padding: 20,
    borderRadius: 8,
  },
  itemTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerUsername: {
    fontStyle: 'italic',
    marginLeft: 2,
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalScore: {
    fontWeight: 'bold',
  },
});

export default styles;
