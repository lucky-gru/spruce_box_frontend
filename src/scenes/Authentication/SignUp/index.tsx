import React, { useState } from 'react';
import {
  makeStyles,
  TextField,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import Layout from '../../../layouts/GuestLayout';
import { AtIcon } from '../../../components/Icons/AtIcon';
import { KeyIcon } from '../../../components/Icons/KeyIcon';
import { ShowAltIcon } from '../../../components/Icons/ShowAltIcon';
import { UserIcon } from '../../../components/Icons/UserIcon';
import { LockIcon } from '../../../components/Icons/LockIcon';

import IconFill from '../../../components/IconFill';
import { catskillWhite, darkGrey, blue } from '../../../theme/colors';
import { PhoneIcon } from '../../../components/Icons/PhoneIcon';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
  },
  formWrapper: {
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
  },
  loginLabel: {
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '68px',
    textAlign: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  inputForm: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(1),
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
  signup: {
    '& .MuiButton-root': {
      marginTop: theme.spacing(3),
      height: '56px',
      borderRadius: '28px',
      fontSize: '18px',
      textTransform: 'none',
    },
    marginBottom: theme.spacing(2),
  },
  term: {
    color: darkGrey,
    textAlign: 'center',
    width: '100%',
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
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'underline',
    color: blue,
    cursor: 'pointer',
  },
  hiThere: {
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 'bold',
  },
  getStarted: {
    fontSize: '54px',
    lineHeight: '58px',
    fontWeight: 'bold',
  },
  name: {
    display: 'flex',
  },
  signinLink: {
    marginTop: theme.spacing(1),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handlePhone = (phone: string) => {
    setValues((prev) => ({
      ...prev,
      phone,
    }));
  };

  const goLogin = () => {
    history.push('/login');
  };

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.formWrapper}>
          <div className={classes.textCenter}>
            <div className={classes.hiThere}>Hi There</div>
            <div className={classes.getStarted}>Let&apos;s get started</div>
          </div>

          <div className={classes.inputForm}>
            <IconFill error={false}>
              <UserIcon />
            </IconFill>
            <div className={classes.name}>
              <div className={classes.textFieldWrapper}>
                <TextField
                  placeholder="John"
                  fullWidth
                  label="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>
              <div className={classes.textFieldWrapper}>
                <TextField
                  placeholder="Doe"
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>
            </div>
          </div>
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
              <PhoneIcon />
            </IconFill>
            <div className={classes.textFieldWrapper}>
              <div className="phone-number-input-field">
                <PhoneInput
                  country="us"
                  specialLabel="Phone Number"
                  value={values.phone}
                  onChange={handlePhone}
                />
              </div>
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
          <div className={classes.inputForm}>
            <IconFill error={false}>
              <LockIcon />
            </IconFill>
            <div className={classes.textFieldWrapper}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
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
          <div className={classes.signup}>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              fullWidth
            >
              Create Account
            </Button>
          </div>
          <div>
            <div className={classes.term}>
              By signing up you agree to our{' '}
              <span className={classes.link}>Terms of Service</span>
            </div>
            <div className={classes.term}>
              and you&apos;ve read our{' '}
              <span className={classes.link}>Privacy Policy</span>
            </div>
          </div>
          <div className={classes.signinLink}>
            <div className={classes.dontHave}>Already have an account?</div>
            <div className={classes.auth} onClick={goLogin}>
              Sign In
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
