import React, { FC } from 'react';

import classNames from './errorMessage.module.scss';

export const ErrorMessage: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <span className={classNames.error}>{children}</span>;
};
