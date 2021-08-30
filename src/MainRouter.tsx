import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './scenes/Authentication/Login';
import SignUp from './scenes/Authentication/SignUp';

const paths = {
  home: `/`,
  login: '/login',
  signup: '/signup'
}

console.log("paths.login", paths);

const MainRouter = () => {

  return (
    <Switch>
      <Route
        exact
        path={paths.login}
        component={Login}
      />
      <Route
        exact
        path={paths.signup}
        component={SignUp}
      />
      <Redirect from={paths.home} to="login" exact />
    </Switch>
  );
};

export default MainRouter;
