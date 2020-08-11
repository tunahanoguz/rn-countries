import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { ScoreItem } from '../../components';
import { getGames } from '../../db';

function OfflineScoresScreen() {
  const [scores, setScores] = useState([]);
  const userID = auth().currentUser.uid;

  useEffect(() => {
    getGames(userID).then((games) => {
      games.map((game) => {
        setScores((score) => [...score, game]);
      });
    });
  }, []);

  return (
    <View style={{ flex: 1, padding: 30 }}>
      {scores.length !== 0 ? (
        <FlatList
          data={scores}
          renderItem={({ item }) => (
            <ScoreItem
              scoreID={item.id}
              scoreType={1}
              totalScore={item.score}
              date={item.date}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>There is no score yet.</Text>
      )}
    </View>
  );
}

export default OfflineScoresScreen;
