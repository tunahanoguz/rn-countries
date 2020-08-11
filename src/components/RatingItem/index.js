import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

function RatingItem({ playerUsername, totalScore, date, bgColor }) {
  return (
    <View style={[styles.item, { backgroundColor: bgColor }]}>
      <View style={styles.itemTop}>
        <Icon name="user" />
        <Text style={styles.playerUsername}>{playerUsername}</Text>
      </View>

      <View style={styles.itemBottom}>
        <View>
          <Text>Total Score</Text>
          <Text style={styles.totalScore}>{totalScore}</Text>
        </View>

        <View>
          <Text>Date</Text>
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  );
}

RatingItem.propTypes = {
  playerUsername: PropTypes.string.isRequired,
  totalScore: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

RatingItem.defaultProps = {
  bgColor: 'tomato',
};

export default RatingItem;
