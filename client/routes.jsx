import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './modules/App/App';
import IDEView from './modules/IDE/pages/IDEView';
import FullView from './modules/IDE/pages/FullView';
import LoginView from './modules/User/pages/LoginView';
import SignupView from './modules/User/pages/SignupView';
import ResetPasswordView from './modules/User/pages/ResetPasswordView';
import EmailVerificationView from './modules/User/pages/EmailVerificationView';
import NewPasswordView from './modules/User/pages/NewPasswordView';
import AccountView from './modules/User/pages/AccountView';
// import SketchListView from './modules/Sketch/pages/SketchListView';
import { getUser } from './modules/User/actions';
import { stopSketch } from './modules/IDE/actions/ide';
import Passos from './modules/IDE/components/Passos';

const checkAuth = (store) => {
  store.dispatch(getUser());
};

const onRouteChange = (store) => {
  store.dispatch(stopSketch());
};

const routes = store => (
  <Route path="/" component={App} onChange={() => { onRouteChange(store); }}>
    <IndexRoute component={IDEView} onEnter={checkAuth(store)} />
    <Route path="/login" component={LoginView} />
    <Route path="/signup" component={SignupView} />
    <Route path="/reset-password" component={ResetPasswordView} />
    <Route path="/verify" component={EmailVerificationView} />
    <Route
      path="/reset-password/:reset_password_token"
      component={NewPasswordView}
    />
    <Route path="/projects/:project_id" component={IDEView} />
    <Route path="/:username/full/:project_id" component={FullView} />
    <Route path="/full/:project_id" component={FullView} />
    <Route path="/sketches" component={IDEView} />
    <Route path="/assets" component={IDEView} />
    <Route path="/account" component={AccountView} />
    <Route path="/:username/sketches/:project_id" component={IDEView} />
    <Route path="/:username/sketches" component={IDEView} />
    <Route path="/about" component={IDEView} />
    <Route path="/fundos" component={IDEView} />
    <Route path="/personagens" component={IDEView} />
    <Route path="/sons" component={IDEView} />
    <Route path="/musicas" component={IDEView} />
    <Route path="/feedback" component={IDEView} />
    <Route path="/passos" component={Passos} />

  </Route>
);

export default routes;
