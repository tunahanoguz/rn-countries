import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { ScoreItem } from '../../components';
import auth from '@react-native-firebase/auth';

function OnlineScoresScreen() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getScores();
  }, []);

  async function getScores() {
    const userID = auth().currentUser.uid;
    firestore()
      .collection('Scores')
      .where('gameType', '==', 0)
      .where('userID', '==', userID)
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
        });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Scores cannot be fetched!', error.message);
      });
  }

  return (
    <View style={{ flex: 1, padding: 30 }}>
      {scores.length !== 0 ? (
        <FlatList
          data={scores}
          renderItem={({ item }) => (
            <ScoreItem
              scoreID={item.id}
              scoreType={0}
              totalScore={item.score}
              date={item.date}
            />
          )}
        />
      ) : (
        <Text>There is no score yet.</Text>
      )}
    </View>
  );
}

export default OnlineScoresScreen;
