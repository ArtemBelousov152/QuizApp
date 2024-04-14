export interface TimerProps {
  time: number;
  setTimeEnd: (value: boolean) => void;
  restartKey: boolean;
  isTimerStop: boolean;
}
