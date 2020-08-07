import React, { useState } from 'react';
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
  const [selectedAnswer, setSelectedAnswer] = useState(5);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <Text style={styles.question}>{question}</Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={option.key}
          style={[
            styles.optionContainer,
            (answer === index) === selectedAnswer && {
              backgroundColor: 'green',
            },
          ]}
          onPress={() => {
            setAnswer((oldAnswers) => [...oldAnswers, option.key]);
            setTimeout(
              () =>
                setCurrentQuestion(
                  (oldCurrentQuestion) => oldCurrentQuestion + 1,
                ),
              500,
            );
            setCurrentCountry(Math.floor(Math.random() * 250));
            setSelectedAnswer(index);
            setIsSelected(true);
          }}>
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}

      {isSelected &&
        (answer === selectedAnswer ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              padding: 30,
              backgroundColor: 'green',
            }}>
            <Text style={{ color: 'white' }}>Correct!</Text>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              padding: 30,
              backgroundColor: 'red',
            }}>
            <Text style={{ color: 'white' }}>Wrong!</Text>
          </View>
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
