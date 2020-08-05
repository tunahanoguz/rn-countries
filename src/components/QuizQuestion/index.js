import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function QuizQuestion({
  question,
  options,
  answer,
  setAnswer,
  setCurrentQuestion,
  setCurrentCountry,
}) {
  return (
    <View>
      <Text style={styles.question}>{question}</Text>

      {options.map((option) => (
        <TouchableOpacity
          key={option.key}
          style={styles.optionContainer}
          onPress={() => {
            setAnswer((oldAnswers) => [...oldAnswers, option.key]);
            setCurrentQuestion((oldCurrentQuestion) => oldCurrentQuestion + 1);
            setCurrentCountry(Math.floor(Math.random() * 250));
          }}>
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  answer: PropTypes.number.isRequired,
  setAnswer: PropTypes.func.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
  setCurrentCountry: PropTypes.func.isRequired,
};

export default QuizQuestion;
