import cx from 'classnames';
import React, { FC } from 'react';

import { StepsProps } from './Steps.types';
import classNames from './steps.module.scss';

export const Steps: FC<StepsProps> = ({ activeStep, steps, goToQuestion }) => {
  return (
    <div className={classNames.steps}>
      {steps.map((_, index) => (
        <div
          onClick={() => {
            goToQuestion(index);
          }}
          key={index}
          className={cx(classNames.step, {
            [classNames.active]: activeStep === index,
            [classNames.answered]: steps[index],
          })}
        ></div>
      ))}
    </div>
  );
};
