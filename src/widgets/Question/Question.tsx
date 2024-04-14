import { FormControl, TextField } from '@mui/material';
import { CheckBoxQuestion, RadioQuestion } from 'components';
import React, { FC } from 'react';
import { questionTypes } from 'types';
import { useAppSelector } from 'utils';

import { QuestionProps } from './Question.types';
import classNames from './question.module.scss';

export const Question: FC<QuestionProps> = ({
  question,
  onChange,
  error,
  helperText,
  value,
}) => {
  if (
    !question.options &&
    [questionTypes.radio, questionTypes.checkBox].includes(question.type)
  )
    return null;
  const currentQuestionIndex = useAppSelector((state) => state.currentIndex);
  const answers = useAppSelector((state) => state.answers);

  const answer = answers[currentQuestionIndex];

  const renderQuestion = () => {
    switch (question.type) {
      case questionTypes.radio: {
        return (
          <RadioQuestion
            onChange={onChange}
            question={question}
            answer={answer}
          />
        );
      }
      case questionTypes.checkBox: {
        return (
          <CheckBoxQuestion
            onChange={onChange}
            question={question}
            answer={answer}
          />
        );
      }
      default: {
        return (
          <TextField
            id="outlined-basic"
            variant="standard"
            onChange={onChange}
            error={error}
            helperText={helperText}
            value={answers[currentQuestionIndex] || value}
            style={{ width: '50%' }}
            multiline
            maxRows={5}
            disabled={Boolean(answer)}
          />
        );
      }
    }
  };

  return (
    <FormControl fullWidth>
      <h3 className={classNames.question}>{question.text}</h3>
      {renderQuestion()}
    </FormControl>
  );
};
