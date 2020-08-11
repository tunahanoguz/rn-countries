import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {
  ScreenSafeContainer,
  ScreenTitle,
  RatingItem,
  BlockButton,
} from '../../components';

function RatingsScreen({ navigation }) {
  const [scores, setScores] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getScores();
  }, []);

  async function getScores() {
    firestore()
      .collection('Scores')
      .where('gameType', '==', 0)
      .orderBy('scores.score', 'desc')
      .limit(5)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const score = {
            id: doc.id,
            ...data,
          };
          setScores((sc) => [...sc, score]);

          firestore()
            .collection('Users')
            .where('id', '==', score.userID)
            .get()
            .then((scoreSnapshot) => {
              const scoreDoc = scoreSnapshot.docs[0];
              const userData = scoreDoc.data();

              setUsers((us) => [...us, userData]);
            });
        });
      })
      .catch((error) => console.log(error));
  }

  function goToAllRatings() {
    navigation.navigate('AllRatingsScreen');
  }

  return (
    <ScreenSafeContainer>
      <ScreenTitle>Ratings</ScreenTitle>

      <View style={{ height: 10 }} />

      {scores.length !== 0 && users.length !== 0 && (
        <FlatList
          data={scores}
          renderItem={({ item, index }) => (
            <RatingItem
              key={item.id}
              index={index}
              ratingID={item.id}
              playerUsername={users[index]?.username}
              totalScore={item.scores.score}
              date={moment(item.data).format('LL')}
            />
          )}
        />
      )}

      <View style={{ height: 10 }} />

      <BlockButton func={goToAllRatings}>See More</BlockButton>
    </ScreenSafeContainer>
  );
}

export default RatingsScreen;
