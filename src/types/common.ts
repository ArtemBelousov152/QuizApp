export interface FormType {
  question: string;
}

export enum questionTypes {
  radio = 'radio',
  checkBox = 'checkBox',
  longAnswer = 'longAnswer',
  shortAnswer = 'shortAnswer',
}
