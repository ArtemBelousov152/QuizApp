import { questionTypes } from 'types';

export interface Question {
  id: number;
  text: string;
  options?: string[];
  type: questionTypes;
}

export type Answer = string | string[] | null;
