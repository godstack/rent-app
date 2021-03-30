import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from 'pages/AuthPages/LoginPage';
import RegisterPage from 'pages/AuthPages/RegisterPage';
import MainPage from 'pages/MainPage';
import { useAuth } from './useAuth';

export const useRoutes = () => {
  const auth = useAuth();

  if (auth.token) {
    return (
      <section className='workspace'>
        <Switch>
          <Route path='/main' exact component={MainPage} />
          <Route path='/announcement/:id' exact component={MainPage} />
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
