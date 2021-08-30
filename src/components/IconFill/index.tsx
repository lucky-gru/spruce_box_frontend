import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { valencia, blue, lilacWhite } from '../../theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    background: lilacWhite,
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    '& svg': {
      fill: blue,
    },
  },
  error: {
    '& svg': {
      fill: valencia,
    },
  },
}));

const IconFill = ({
  error,
  children,
}: {
  error: boolean;
  children: ReactNode;
}) => {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.root, {
        [classes.primary]: !error,
        [classes.error]: error,
      })}
    >
      {children}
    </div>
  );
};

export default IconFill;
