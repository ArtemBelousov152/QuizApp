import { Answer } from 'types';

export interface StepsProps {
  activeStep: number;
  steps: Answer[];
  goToQuestion: (questionIndex: number) => void;
}
