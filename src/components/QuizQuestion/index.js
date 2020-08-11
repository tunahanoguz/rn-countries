import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function QuizQuestion({
  type,
  question,
  options,
  answer,
  setCurrentQuestion,
  setCorrectAnswersCount,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(5);
  const [isSelected, setIsSelected] = useState(false);

  function saveAnswer(index) {
    setSelectedAnswer(index);
    setIsSelected(true);
  }

  function skipQuestion() {
    setCurrentQuestion((oldCurrentQuestion) => oldCurrentQuestion + 1);
    setSelectedAnswer(5);
    setIsSelected(false);
  }

  function showSkipAlert(index) {
    if (answer === index) {
      setCorrectAnswersCount((count) => count + 1);

      Alert.alert('Correct!', 'You answered the question correctly.', [
        {
          text: 'Skip',
          onPress: () => skipQuestion(),
        },
      ]);
    } else {
      Alert.alert(
        'Wrong!',
        `You answered the question wrongly. Correct answer: ${options[answer]}`,
        [
          {
            text: 'Skip',
            onPress: () => skipQuestion(),
          },
        ],
      );
    }
  }

  return (
    <View>
      <Text style={styles.question}>{question}</Text>

      <ScrollView>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionContainer,
              (answer === index) === selectedAnswer && {
                backgroundColor: 'green',
              },
            ]}
            onPress={() => {
              saveAnswer(index);
              showSkipAlert(index);
            }}>
            {type === 0 ? (
              <Text>{option.length !== 0 ? option : 'None'}</Text>
            ) : (
              <Image
                source={{
                  uri: option,
                }}
                style={{
                  alignSelf: 'center',
                  width: 128,
                  height: 128,
                  marginTop: -30,
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/*{isSelected &&*/}
      {/*  (answer === selectedAnswer ? (*/}
      {/*    <View*/}
      {/*      style={{*/}
      {/*        justifyContent: 'center',*/}
      {/*        alignItems: 'center',*/}
      {/*        marginTop: 10,*/}
      {/*        padding: 30,*/}
      {/*        backgroundColor: 'green',*/}
      {/*      }}>*/}
      {/*      <Text style={{ color: 'white' }}>Correct!</Text>*/}
      {/*    </View>*/}
      {/*  ) : (*/}
      {/*    <View*/}
      {/*      style={{*/}
      {/*        justifyContent: 'center',*/}
      {/*        alignItems: 'center',*/}
      {/*        marginTop: 10,*/}
      {/*        padding: 30,*/}
      {/*        backgroundColor: 'red',*/}
      {/*      }}>*/}
      {/*      <Text style={{ color: 'white' }}>Wrong!</Text>*/}
      {/*    </View>*/}
      {/*  ))}*/}
    </View>
  );
}

QuizQuestion.propTypes = {
  type: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  answer: PropTypes.number.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
  setCorrectAnswersCount: PropTypes.func.isRequired,
};

QuizQuestion.defaultProps = {
  type: 0,
};

export default QuizQuestion;
