import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

function RatingItem({
  index,
  ratingID,
  playerUsername,
  totalScore,
  date,
  bgColor,
}) {
  const navigation = useNavigation();

  function goToRatingDetail() {
    navigation.navigate('RatingDetailScreen', { id: ratingID, index });
  }

  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: bgColor }]}
      onPress={goToRatingDetail}>
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
    </TouchableOpacity>
  );
}

RatingItem.propTypes = {
  index: PropTypes.number.isRequired,
  ratingID: PropTypes.string.isRequired,
  playerUsername: PropTypes.string.isRequired,
  totalScore: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

RatingItem.defaultProps = {
  bgColor: 'tomato',
};

export default RatingItem;
