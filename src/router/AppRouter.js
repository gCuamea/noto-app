import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LoginRegisterScreen } from '../components/auth/LoginRegisterScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { firebase } from '../firebase/fconfig';
import { login } from '../actions/auth';
import { Dashboard } from '../components/dashboard/Dashboard';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadingNotes(user.uid));
      }
    });
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            isAuthenticated={!!uid}
            component={LoginRegisterScreen}
          />
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={!!uid}
            component={Dashboard}
          />
        </Switch>
      </div>
    </Router>
  );
};
