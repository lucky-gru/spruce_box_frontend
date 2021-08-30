import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../../components/Headers/GuestHeader';
import { darkGrey } from '../../theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    color: darkGrey
  },
  main: {
    height: 'calc(100vh - 105.44px)'
  }
}));

const Layout: FC = ({ children, }) => {
  const classes = useStyles();

  return (
    <div className= {classes.root}>
      <Header />
      <div className={classes.main}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
