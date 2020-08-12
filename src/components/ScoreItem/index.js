import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles';

function ScoreItem({ scoreID, scoreType, totalScore, date }) {
  const trimmedDate = moment(date).format('LL');

  return (
    <View style={styles.item}>
      <View style={styles.leftScoreItem}>
        <Text>Total Score</Text>
        <Text style={styles.scoreText}>{totalScore}</Text>
      </View>

      <Text style={styles.dateText}>{trimmedDate}</Text>
    </View>
  );
}

ScoreItem.propTypes = {
  scoreID: PropTypes.any.isRequired,
  scoreType: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
};

export default ScoreItem;
