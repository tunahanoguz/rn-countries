import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import {
  ScreenSafeContainer,
  ScreenTitle,
  QuizQuestion,
} from '../../components';
import { fetchAllCountries } from '../../axiosInstance';

function QuizScreen({ navigation }) {
  const [isStarted, setIsStarted] = useState(false);
  const [totalTime, setTotalTime] = useState(10);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState([]);

  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentCountry, setCurrentCountry] = useState(
    Math.floor(Math.random() * 250),
  );

  const [correctAnswerPlace, setCorrectAnswerPlace] = useState(
    Math.floor(Math.random() * 4),
  );

  useEffect(() => {
    if (countries.length === 0) {
      fetchAllCountries()
        .then((allCountries) => setCountries(allCountries))
        .catch((err) => setError(err));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsStarted(true);
      return startGame();
    }, 2000);
  }, []);

  useEffect(() => {
    if (totalTime === 0) {
      return finishGame();
    }
  }, [totalTime]);

  const startGame = () => {
    setTotalTime(10);
    setCurrentQuestion(0);
    let time = 10;

    // if (totalTime <= 10 && totalTime !== 0) {
    setInterval(() => {
      if (time !== 0) {
        time--;
        setTotalTime((totalTime) => totalTime - 1);
      }
    }, 1000);
    // }
  };

  function finishGame() {
    setAnswers([]);

    Alert.alert('Game is over!', 'asd', [
      {
        text: 'Finish',
        onPress: () => navigation.navigate('Home', { screen: 'HomeScreen' }),
      },
      {
        text: 'New Game',
        onPress: () => startGame(),
      },
    ]);
  }

  function createRandomOptions(answerType) {
    const randomOptionNumber =
      (currentCountry !== 250 || currentCountry !== 1) && currentCountry;

    if (answerType === 'languages' || answerType === 'currencies') {
      return [
        {
          key: 0,
          text: `${
            correctAnswerPlace === 0
              ? countries[randomOptionNumber][answerType][0]['name']
              : countries[randomOptionNumber - 2][answerType][0]['name']
          }`,
        },
        {
          key: 1,
          text: `${
            correctAnswerPlace === 1
              ? countries[randomOptionNumber][answerType][0]['name']
              : countries[randomOptionNumber - 1][answerType][0]['name']
          }`,
        },
        {
          key: 2,
          text: `${
            correctAnswerPlace === 2
              ? countries[randomOptionNumber][answerType][0]['name']
              : countries[randomOptionNumber + 1][answerType][0]['name']
          }`,
        },
        {
          key: 3,
          text: `${
            correctAnswerPlace === 3
              ? countries[randomOptionNumber][answerType][0]['name']
              : countries[randomOptionNumber + 2][answerType][0]['name']
          }`,
        },
      ];
    }

    return [
      {
        key: 0,
        text: `${
          correctAnswerPlace === 0
            ? countries[randomOptionNumber][answerType]
            : countries[randomOptionNumber - 2][answerType]
        }`,
      },
      {
        key: 1,
        text: `${
          correctAnswerPlace === 1
            ? countries[randomOptionNumber][answerType]
            : countries[randomOptionNumber - 1][answerType]
        }`,
      },
      {
        key: 2,
        text: `${
          correctAnswerPlace === 2
            ? countries[randomOptionNumber][answerType]
            : countries[randomOptionNumber + 1][answerType]
        }`,
      },
      {
        key: 3,
        text: `${
          correctAnswerPlace === 3
            ? countries[randomOptionNumber][answerType]
            : countries[randomOptionNumber + 2][answerType]
        }`,
      },
    ];
  }

  let questions = [];

  if (countries.length !== 0) {
    questions = [
      {
        question: `Which is the capital of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('capital'),
        answer: 0,
      },
      {
        question: `Which is the alpha 3 code of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('alpha3Code'),
        answer: 0,
      },
      {
        question: `Which is the region of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('region'),
        answer: 0,
      },
      {
        question: `Which is the subregion of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('subregion'),
        answer: 0,
      },
      {
        question: `Which of the following is one of the languages of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('languages'),
        answer: 0,
      },
      {
        question: `What is the native name of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('nativeName'),
        answer: 0,
      },
      {
        question: `Which is the population of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('population'),
        answer: 0,
      },
      {
        question: `Which is the demonym of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('demonym'),
        answer: 0,
      },
      {
        question: `Which is the currency of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('currencies'),
        answer: 0,
      },
      {
        question: `Which is the flag of ${countries[currentCountry]?.name}?`,
        options: createRandomOptions('capital'),
        answer: 0,
      },
    ];
  }

  function renderContent() {
    if (error != null && countries.length !== 0 && isStarted === true) {
      if (currentQuestion < 10) {
        return (
          <>
            <ScreenTitle>Soru {currentQuestion + 1}</ScreenTitle>

            <View style={{ height: 10 }} />
            <QuizQuestion
              key={currentQuestion}
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              answer={questions[currentQuestion].answer}
              setAnswer={setAnswers}
              setCurrentQuestion={setCurrentQuestion}
              setCurrentCountry={setCurrentCountry}
            />
          </>
        );
      } else {
        return (
          <>
            <Text>Test is over!</Text>
            <Text>7 correct, 3 fault answer!</Text>
          </>
        );
      }
    } else if (isStarted === false) {
      return <ActivityIndicator />;
    } else {
      return <Text>{error}</Text>;
    }
  }

  return (
    <ScreenSafeContainer>
      <Text style={{ fontSize: 18, textAlign: 'center' }}>
        Time: {totalTime}
      </Text>

      <View style={{ height: 10 }} />

      {renderContent()}
    </ScreenSafeContainer>
  );
}

export default QuizScreen;
