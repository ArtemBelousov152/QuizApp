import { Answer, Question } from 'types';

export interface QuestionProps {
  question: Question;
  onChange: (...event: any[]) => void;
  answer?: Answer;
  error?: boolean;
  helperText?: React.ReactNode;
  value?: string;
}
