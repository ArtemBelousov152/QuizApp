import { FormControlLabel } from '@mui/material';
import { StyledCheckbox } from 'components';
import React, { FC, useState } from 'react';
import { QuestionProps } from 'widgets';

export const CheckBoxQuestion: FC<QuestionProps> = ({
  onChange,
  question,
  answer,
}) => {
  if (!question.options) return null;

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      const addValue = [...selectedOptions, value];
      setSelectedOptions(addValue);
      onChange(addValue);
    } else {
      const removeValue = selectedOptions.filter((option) => option !== value);
      onChange(removeValue);
      setSelectedOptions(removeValue);
    }
  };

  const haveAnswer = (option: string) => {
    return answer
      ? {
          checked: Boolean(
            answer && Array.isArray(answer) && answer.includes(option)
          ),
        }
      : {};
  };

  return (
    <>
      {question.options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option}
          control={<StyledCheckbox onChange={handleChange} />}
          label={option}
          disabled={Boolean(answer)}
          {...haveAnswer(option)}
        />
      ))}
    </>
  );
};
