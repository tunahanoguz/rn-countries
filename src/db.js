import Realm from 'realm';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const GameSchema = {
  name: 'Game',
  primaryKey: 'id',
  properties: {
    id: { type: 'int' },
    userID: { type: 'string' },
    score: { type: 'int', default: 0 },
    gameType: { type: 'int', default: 0 },
    gameLevel: { type: 'int', default: 0 },
    date: { type: 'date' },
  },
};

const databaseOptions = {
  path: 'countriesQuizGame.realm',
  schema: [GameSchema],
  schemaVersion: 1,
};

export const insertGame = (score, game) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const lastGame = realm.objects('Game').sorted('id', true)[0];
          const highestID = lastGame == null ? 0 : lastGame.id;
          const finalID = highestID == null ? 1 : highestID + 1;

          realm.create('Game', {
            id: finalID,
            score,
            ...game,
          });

          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const getGames = (userID) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        const games = realm.objects('Game').filtered(`userID == "${userID}"`);
        resolve(games);
      })
      .catch((error) => reject(error));
  });

export const getGameByID = (id) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        const game = realm.objects('Game').filtered(`id == "${id}"`)[0];
        resolve(game);
      })
      .catch((error) => reject(error));
  });

export function saveOnlineGame(score) {
  const userID = auth().currentUser.uid;
  const userEmail = auth().currentUser.email;
  const usersCollection = firestore().collection('Users');

  usersCollection
    .where('email', '==', userEmail)
    .get()
    .then((userDocs) => {
      const userDoc = userDocs.docs[0];
      const userData = userDoc.data();

      const userGameType = userData.gameType;
      const userGameLevel = userData.gameLevel;

      const scoresCollection = firestore().collection(`Scores`);
      scoresCollection.add({
        userID,
        score,
        gameType: userGameType,
        gameLevel: userGameLevel,
        date: new Date(),
      });
    });
}

export function saveOfflineGame(score) {
  const userID = auth().currentUser.uid;
  const userEmail = auth().currentUser.email;
  const usersCollection = firestore().collection('Users');

  usersCollection
    .where('email', '==', userEmail)
    .get()
    .then((userDocs) => {
      const userDoc = userDocs.docs[0];
      const userData = userDoc.data();

      const userGameType = userData.gameType;
      const userGameLevel = userData.gameLevel;

      const game = {
        userID,
        score,
        gameType: userGameType,
        gameLevel: userGameLevel,
        date: new Date(),
      };

      insertGame(score, game);
    });
}
