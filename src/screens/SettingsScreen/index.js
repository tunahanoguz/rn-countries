import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  ScreenSafeContainer,
  ScreenTitle,
  BlockButton,
  SettingsItem,
} from '../../components';

function SettingsScreen() {
  const [gameType, setGameType] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);

  const userEmail = auth().currentUser.email;

  useEffect(() => {
    firestore()
      .collection('Users')
      .where('email', '==', userEmail)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const userGameType = data.gameType;
          const userGameLevel = data.gameLevel;

          setGameType(userGameType);
          setGameLevel(userGameLevel);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function saveSettings() {
    const scoreRef = firestore()
      .collection('Users')
      .where('email', '==', userEmail)
      .limit(1);
    scoreRef.get().then((userDocs) => {
      const userDoc = userDocs.docs[0];
      userDoc.ref
        .update({
          gameType,
          gameLevel,
        })
        .then(() => {
          Alert.alert('Successful!', 'Settings have been successfully saved.');
        });
    });
  }

  return (
    <ScrollView>
      <ScreenSafeContainer>
        <ScreenTitle>Settings</ScreenTitle>

        <SettingsItem
          title="Game Type"
          settings={[
            {
              title: 'Online',
              description:
                'The scores obtained are recorded for competitive purposes. Requires internet.',
            },
            {
              title: 'Offline',
              description:
                'The scores obtained are stored in local memory. No internet required.',
            },
          ]}
          state={gameType}
          setSettingState={setGameType}
        />

        <SettingsItem
          title="Game Level"
          settings={[
            {
              title: 'Very Easy',
              description:
                'The location and type of coins change every three second.',
            },
            {
              title: 'Easy',
              description:
                'The location and type of coins change every two second.',
            },
            {
              title: 'Medium',
              description:
                'The location and type of coins change every one second.',
            },
            {
              title: 'Hard',
              description:
                'The location and type of coins change every half second.',
            },
            {
              title: 'Very Hard',
              description:
                'The location and type of coins change every quarter second.',
            },
          ]}
          state={gameLevel}
          setSettingState={setGameLevel}
        />

        <BlockButton func={saveSettings}>Save</BlockButton>
      </ScreenSafeContainer>
    </ScrollView>
  );
}

export default SettingsScreen;
