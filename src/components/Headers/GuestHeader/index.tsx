import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { LogoIcon } from '../../Icons/LogoIcon';
import { ChevronDownIcon } from '../../Icons/ChevronDownIcon';
import { darkGrey } from '../../../theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '28.73px 48px',
    position: 'relative',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    marginLeft: '35.67px',
    cursor: 'pointer',
  },
  nav: {
    top: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    left: '50%',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  navDesc: {
    marginRight: '4px',
  },
  btnWrapper: {
    position: 'absolute',
    right: '50px',
    display: 'flex',
    flexDirection: 'row',
  },
  loginBtn: {
    '& .MuiButton-root': {
      textTransform: 'none',
      color: darkGrey,
      background: 'transparent',
      fontSize: '18px',
    },
  },
  getStarted: {
    marginLeft: theme.spacing(3),
    width: '160px',
    '& .MuiButton-root': {
      textTransform: 'none',
      fontSize: '18px',
      height: '48px',
      borderRadius: '24px',
    },
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LogoIcon />
      <div className={classes.nav}>
        <div className={classes.navItem}>
          <span className={classes.navDesc}>For Merchants</span>
          <ChevronDownIcon />
        </div>
        <div className={classes.navItem}>
          <span className={classes.navDesc}>For Drivers & Shoppers</span>
          <ChevronDownIcon />
        </div>
        <div className={classes.navItem}>How Marketplace Works</div>
      </div>
      <div className={classes.btnWrapper}>
        <div className={classes.loginBtn}>
          <Button disableTouchRipple>Log In</Button>
        </div>
        <div className={classes.getStarted}>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            disableElevation
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
