import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  ScreenSafeContainer,
  ScreenTitle,
  QuizQuestion,
} from '../../components';
import { fetchAllCountries } from '../../axiosInstance';
import {
  createNormalQuestion,
  createRegionQuestion,
  createSubregionQuestion,
  createLanguageQuestion,
  createCurrencyQuestion,
  createFlagQuestion,
} from './functions';
import { saveOnlineGame, saveOfflineGame } from '../../db';

function QuizScreen({ navigation }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  useEffect(() => {
    if (countries.length === 0) {
      fetchAllCountries()
        .then((countries) => setCountries(countries))
        .catch((err) => setError(err));
    }
  }, []);

  function goToHomeScreen() {
    navigation.navigate('Home', { screen: 'HomeScreen' });
  }

  function showFinishAlert() {
    saveGame();
    Alert.alert(
      'Game over!',
      `Game is over. Your correct answer number is: ${correctAnswersCount}`,
      [{ text: 'Finish', onPress: goToHomeScreen }],
    );
  }

  function saveGame() {
    const userEmail = auth().currentUser.email;
    const usersCollection = firestore().collection('Users');

    usersCollection
      .where('email', '==', userEmail)
      .get()
      .then((userDocs) => {
        const userDoc = userDocs.docs[0];
        const userData = userDoc.data();

        const userGameType = userData.gameType;

        if (userGameType === 0) {
          saveOnlineGame(correctAnswersCount);
        } else {
          saveOfflineGame(correctAnswersCount);
        }
      });
  }

  function setQuizQuestion(createdQuestion, type = 0) {
    const { question, options, correctAnswerPlace, country } = createdQuestion;
    return (
      <>
        <ScreenTitle>Question {currentQuestion + 1}</ScreenTitle>
        <QuizQuestion
          type={type}
          country={country}
          question={question}
          options={options}
          answer={correctAnswerPlace}
          setCurrentQuestion={setCurrentQuestion}
          setCorrectAnswersCount={setCorrectAnswersCount}
        />
      </>
    );
  }

  function renderQuestion() {
    if (countries.length !== 0 && error.length === 0) {
      if (currentQuestion === 0) {
        const createdQuestion = createNormalQuestion(countries, 'capital');

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 1) {
        const createdQuestion = createNormalQuestion(countries, 'alpha3Code');

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 2) {
        const createdQuestion = createRegionQuestion(countries);

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 3) {
        const createdQuestion = createSubregionQuestion(countries);

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 4) {
        const createdQuestion = createLanguageQuestion(countries);

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 5) {
        const createdQuestion = createNormalQuestion(countries, 'nativeName');

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 6) {
        const createdQuestion = createNormalQuestion(countries, 'population');

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 7) {
        const createdQuestion = createNormalQuestion(countries, 'demonym');

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 8) {
        const createdQuestion = createCurrencyQuestion(countries);

        return setQuizQuestion(createdQuestion);
      } else if (currentQuestion === 9) {
        const createdQuestion = createFlagQuestion(countries);

        return setQuizQuestion(createdQuestion, 1);
      } else {
        return showFinishAlert();
      }
    } else if (countries.length === 0 && error.length !== 0) {
      return <ActivityIndicator />;
    } else {
      return <Text>Error!</Text>;
    }
  }

  return <ScreenSafeContainer>{renderQuestion()}</ScreenSafeContainer>;
}

export default QuizScreen;
