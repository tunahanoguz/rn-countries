import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function ScoreDetailItem({ scoreTitle, scoreDescription }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{scoreTitle}</Text>
      <Text>{scoreDescription}</Text>
    </View>
  );
}

ScoreDetailItem.propTypes = {
  scoreTitle: PropTypes.string.isRequired,
  scoreDescription: PropTypes.any.isRequired,
};

export default ScoreDetailItem;
