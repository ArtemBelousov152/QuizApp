import { ErrorMessage, Steps, SubmitButton, Timer } from 'components';
import { questions } from 'mocks';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { addAnswer, setAnswers, setCurrentQuestionIndex } from 'store/slices';
import { FormType, questionTypes } from 'types';
import { useAppDispatch, useAppSelector } from 'utils';
import { Question } from 'widgets';

import classNames from './testPage.module.scss';

export const TestPage = () => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector((state) => state.answers);
  const currentQuestionIndex = useAppSelector((state) => state.currentIndex);

  const formMethods = useForm<FormType>({
    defaultValues: { question: '' },
  });

  const { control, handleSubmit, formState, resetField } = formMethods;
  const [isTimeEnd, setIsTimeEnd] = useState(false);
  const [isEndTest, setIsEndTest] = useState(() => {
    const currentQuestion = sessionStorage.getItem('currentQuestion');

    if (currentQuestion) {
      return +currentQuestion >= questions.length;
    }

    return false;
  });
  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex],
    [currentQuestionIndex]
  );

  const handleChangeCurrentQuestIndex = (index: number) => {
    dispatch(setCurrentQuestionIndex(index));
  };

  useEffect(() => {
    const savedAnswers = sessionStorage.getItem('testAnswers');
    dispatch(
      setAnswers(
        savedAnswers
          ? JSON.parse(savedAnswers)
          : Array(questions.length).fill(null)
      )
    );

    const savedQuestion = sessionStorage.getItem('currentQuestion');

    handleChangeCurrentQuestIndex(savedQuestion ? parseInt(savedQuestion) : 0);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('testAnswers', JSON.stringify(answers));
    sessionStorage.setItem('currentQuestion', `${currentQuestionIndex}`);
  }, [answers, currentQuestionIndex]);

  useEffect(() => {
    if (
      answers.length &&
      answers.findIndex((answer) => answer === null) === -1
    ) {
      setIsEndTest(true);
    }
  }, [answers]);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    let newIndex = currentQuestionIndex + 1;

    while (answers[newIndex]) {
      newIndex++;
    }

    const notAnsweredQuestion = answers.findIndex((answer) => answer === null);
    if (
      newIndex >= questions.length &&
      notAnsweredQuestion !== 0 &&
      notAnsweredQuestion === -1
    ) {
      setIsEndTest(true);
    }

    dispatch(addAnswer({ answer: data.question, currentQuestionIndex }));
    handleChangeCurrentQuestIndex(
      newIndex >= answers.length &&
        (notAnsweredQuestion || notAnsweredQuestion === 0)
        ? notAnsweredQuestion
        : newIndex
    );
    resetField('question');
  };
  const startNewTest = () => {
    dispatch(setAnswers(Array(questions.length).fill(null)));
    handleChangeCurrentQuestIndex(0);
    setIsTimeEnd(false);
    setIsEndTest(false);
  };

  const handleChangeQuestion = (questionIndex: number) => {
    handleChangeCurrentQuestIndex(questionIndex);
    resetField('question');
  };

  return (
    <FormProvider {...formMethods}>
      <div className={classNames.wrapper}>
        <div className={classNames.titleWrapper}>
          <h2>Тестирование</h2>
          <Timer
            time={600}
            setTimeEnd={setIsTimeEnd}
            restartKey={isTimeEnd}
            isTimerStop={isEndTest}
          />
        </div>
        {isTimeEnd || isEndTest ? (
          <div className={classNames.testEnd}>Тестирование окончено</div>
        ) : (
          <Steps
            activeStep={currentQuestionIndex}
            steps={answers}
            goToQuestion={handleChangeQuestion}
          />
        )}

        {isTimeEnd || isEndTest ? (
          <div className={classNames.submitBtn}>
            <SubmitButton onClick={startNewTest} type="submit">
              Попробовать снова
            </SubmitButton>
          </div>
        ) : (
          <>
            <Controller
              name="question"
              control={control}
              rules={{
                maxLength: {
                  value:
                    currentQuestion.type === questionTypes.shortAnswer
                      ? 25
                      : 255,
                  message: 'Слишком длинный ответ',
                },
                required: { value: true, message: 'Дайте ответ' },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error, invalid },
              }) => (
                <Question
                  onChange={onChange}
                  question={currentQuestion}
                  value={value}
                  error={invalid}
                  helperText={error?.message}
                />
              )}
            />
            {!formState.isValid &&
              formState.errors.question?.type === 'required' &&
              [questionTypes.radio, questionTypes.checkBox].includes(
                currentQuestion.type
              ) && (
                <ErrorMessage>
                  {formState.errors.question?.message}
                </ErrorMessage>
              )}
            <div className={classNames.submitBtn}>
              <SubmitButton
                onClick={handleSubmit(onSubmit)}
                type="submit"
                disabled={Boolean(answers[currentQuestionIndex])}
              >
                Ответить
              </SubmitButton>
            </div>
          </>
        )}
      </div>
    </FormProvider>
  );
};
