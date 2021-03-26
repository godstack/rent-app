import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from 'pages/AuthPages/LoginPage';
import RegisterPage from 'pages/AuthPages/RegisterPage';
import MainPage from 'pages/MainPage';

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <section className='workspace'>
        <Switch>
          <Route path='/main' exact component={MainPage} />
          <Redirect to='/main' />
        </Switch>
      </section>
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
