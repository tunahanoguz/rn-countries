import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import { ScreenSafeContainer, RatingItem } from '../../components';

function RatingsScreen() {
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

  return (
    <ScreenSafeContainer>
      {scores.length !== 0 && users.length !== 0 && (
        <FlatList
          data={scores}
          renderItem={({ item, index }) => (
            <RatingItem
              key={item.id}
              playerUsername={users[index]?.username}
              totalScore={item.score}
              date={moment(item.data).format('LL')}
            />
          )}
        />
      )}
    </ScreenSafeContainer>
  );
}

export default RatingsScreen;
