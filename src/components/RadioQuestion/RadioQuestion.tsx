import { FormControlLabel, RadioGroup } from '@mui/material';
import React, { FC } from 'react';
import { QuestionProps } from 'widgets';

import { RadioButton } from 'components/Buttons';

export const RadioQuestion: FC<QuestionProps> = ({
  onChange,
  question,
  answer,
}) => {
  if (!question.options) return null;

  const haveAnswer = (option: string) => {
    return answer ? { checked: answer === option } : {};
  };

  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
    >
      {question.options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option}
          control={<RadioButton />}
          label={option}
          onChange={onChange}
          disabled={Boolean(answer) && answer !== option}
          {...haveAnswer(option)}
        />
      ))}
    </RadioGroup>
  );
};
