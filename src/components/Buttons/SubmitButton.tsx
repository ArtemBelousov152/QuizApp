import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import React, { FC } from 'react';

const StyledButton = styled(Button)({
  backgroundColor: 'var(--main-red)',
  color: 'white',
  padding: '10px 50px',
  display: 'block',
  '&:hover': { opacity: '80%', backgroundColor: 'var(--main-red)' },
  '&:disabled': { backgroundColor: 'var(--main-gray)' },
});

export const SubmitButton: FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
