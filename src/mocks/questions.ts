import { Question, questionTypes } from 'types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'Что такое HTML?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
    ],
    type: questionTypes.radio,
  },
  {
    id: 2,
    text: 'Какой тег используется для создания заголовка в HTML?',
    type: questionTypes.shortAnswer,
  },
  {
    id: 3,
    text: 'Опишите принцип работы JavaScript.',
    type: questionTypes.longAnswer,
  },
  {
    id: 4,
    text: 'Какие из перечисленных языков программирования являются статически типизированными?',
    options: ['JavaScript', 'Python', 'TypeScript'],
    type: questionTypes.checkBox,
  },
  {
    id: 5,
    text: 'Что такое CSS?',
    type: questionTypes.shortAnswer,
  },
  {
    id: 6,
    text: 'Как создать новый элемент списка в HTML?',
    type: questionTypes.shortAnswer,
  },
  {
    id: 7,
    text: 'Какие из следующих языков программирования относятся к объектно-ориентированным?',
    options: ['Java', 'C', 'SQL'],
    type: questionTypes.checkBox,
  },
  {
    id: 8,
    text: 'Что такое API?',
    type: questionTypes.shortAnswer,
  },
  {
    id: 9,
    text: 'Для чего используется SQL?',
    type: questionTypes.longAnswer,
  },
  {
    id: 10,
    text: 'Как создать класс в языке программирования Python?',
    type: questionTypes.shortAnswer,
  },
  {
    id: 11,
    text: 'Какие из перечисленных языков программирования являются функциональными?',
    options: ['JavaScript', 'Haskell', 'Ruby'],
    type: questionTypes.checkBox,
  },
  {
    id: 12,
    text: 'Как создать новый файл в командной строке (Windows)?',
    type: questionTypes.shortAnswer,
  },
  {
    id: 13,
    text: 'Что такое HTTP?',
    type: questionTypes.shortAnswer,
  },
  {
    id: 14,
    text: 'Что такое алгоритм?',
    type: questionTypes.longAnswer,
  },
  {
    id: 15,
    text: 'Какое расширение файла используется для HTML-документов?',
    type: questionTypes.shortAnswer,
  },
];
