import React, { useState } from 'react';
import {
  makeStyles,
  TextField,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router';

import Layout from '../../../layouts/GuestLayout';
import { LoginLogoIcon } from '../../../components/Icons/LoginLogoIcon';
import { AtIcon } from '../../../components/Icons/AtIcon';
import { KeyIcon } from '../../../components/Icons/KeyIcon';
import { ShowAltIcon } from '../../../components/Icons/ShowAltIcon';

import IconFill from '../../../components/IconFill';
import { catskillWhite, darkGrey, blue } from '../../../theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px'
  },
  formWrapper: {
    marginTop: theme.spacing(2),
    width: '500px',
    height: '622px',
    display: 'flex',
    flexDirection: 'column',
  },
  loginLabel: {
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '68px',
    textAlign: 'center',
  },
  logoWrapper: {
    textAlign: 'center',
  },
  inputForm: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(2),
  },
  textFieldWrapper: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    fontSize: '18px',
    '& .MuiInputBase-input': {
      paddingBottom: '17px',
      color: '#626264',
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before, & .MuiInput-root:hover::before':
      {
        borderBottom: `2px solid ${catskillWhite}`,
      },
    '& .MuiFormLabel-root': {
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '18px',
      color: darkGrey,
    },
  },
  login: {
    '& .MuiButton-root': {
      marginTop: theme.spacing(3),
      height: '56px',
      borderRadius: '28px',
      fontSize: '18px',
      textTransform: 'none'
    },
  },
  forgotPass: {
    color: '#98999D',
    textAlign: 'center',
    width: '100%',
    cursor: 'pointer',
    marginBottom: theme.spacing(2)
  },
  dontHave: {
    textAlign: 'center',
    color: darkGrey,
    fontWeight: 'bold',
    width: '100%',
  },
  auth: {
    textAlign: 'center',
    color: blue,
    width: '100%',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const goSignUp = () => {
    history.push('/signup');
  }

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.formWrapper}>
          <div className={classes.logoWrapper}>
            <LoginLogoIcon />
          </div>
          <div className={classes.loginLabel}>Log In</div>
          <div className={classes.inputForm}>
            <IconFill error={false}>
              <AtIcon />
            </IconFill>
            <div className={classes.textFieldWrapper}>
              <TextField
                placeholder="john@doe.com"
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
          </div>
          <div className={classes.inputForm}>
            <IconFill error={false}>
              <KeyIcon />
            </IconFill>
            <div className={classes.textFieldWrapper}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ShowAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className={classes.login}>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              fullWidth
            >
              Log In
            </Button>
          </div>
          <div className={classes.inputForm}>
            <div className={classes.forgotPass}>Forgot Password?</div>
          </div>
          <div>
            <div className={classes.dontHave}>Don&apos;t have an account?</div>
            <div className={classes.auth} onClick={goSignUp}>Sign up</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
