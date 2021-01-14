import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { attemptGetUser } from "./store/thunks/user";
import Titletop from "./components/views/TitleTop";
import {
  ConfirmPage,
  Appointment,
  Home,
  Services,
  Products,
  News,
  About,
  More,
  Profile,
  NavBar,
  Login,
  LoginForgot,
  LoginResetPassword,
  Logout,
  Register,
} from "./components/views";
import ProtectedRoute from "./components/shared/protectedRoute.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(attemptGetUser())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <p>Loading</p>
  ) : (
    <React.Fragment>
      <Titletop></Titletop>
      <NavBar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/Services' exact component={Services} />
        <Route path='/Products' exact component={Products} />
        <Route path='/News' exact component={News} />
        <Route path='/About' exact component={About} />
        <Route path='/More' exact component={More} />
        <Route path='/Appointment' exact component={Appointment} />
        <ProtectedRoute path='/my-profile' exact component={Profile} />
        <Route path='/account/confirm/:token' exact component={ConfirmPage} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/login/forgot' exact component={LoginForgot} />
        <Route path='/login/reset/:token' component={LoginResetPassword} />
        <ProtectedRoute path='/logout' exact component={Logout} />
        <Redirect from='/' exact to='/home' />
        <Redirect to='/home' />
      </Switch>
    </React.Fragment>
  );
}
