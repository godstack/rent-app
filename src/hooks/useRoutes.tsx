import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from 'pages/AuthPages/LoginPage';
import RegisterPage from 'pages/AuthPages/RegisterPage';
import MainPage from 'pages/MainPage';
import { useAuth } from './useAuth';
import { AnnouncementPage } from 'pages/AnnouncementPage';
import { ReservedPage } from 'pages/ReservedPage';

export const useRoutes = () => {
  const auth = useAuth();

  if (auth.token) {
    return (
      <Switch>
        <Route path='/main' exact component={MainPage} />
        <Route path='/reserved' exact component={ReservedPage} />
        <Route path='/announcement/:id' exact component={AnnouncementPage} />
        <Redirect to='/main' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/login' exact component={LoginPage} />
      <Route path='/register' exact component={RegisterPage} />
      <Redirect to='/login' />
    </Switch>
  );
};
