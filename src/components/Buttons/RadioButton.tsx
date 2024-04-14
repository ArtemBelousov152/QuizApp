import { Radio, RadioProps, styled } from '@mui/material';
import React from 'react';

const Icon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  border: '1px solid black',
  boxShadow:
    'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#f5f8fa',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    opacity: '80%',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
  },
}));

const CheckedIcon = styled(Icon)({
  backgroundColor: 'var(--main-red)',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    content: '""',
  },
});

export const RadioButton = (props: RadioProps) => {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<CheckedIcon />}
      icon={<Icon />}
      {...props}
    />
  );
};
