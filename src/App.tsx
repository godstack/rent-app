import { FC } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { GlobalStyles, MainWrapper } from './globalStyles';
import { useRoutes } from 'hooks/useRoutes';
import { ProvideAuth } from 'auth/authContext';
import { useAuth } from 'hooks/useAuth';
import { BrowserRouter as Router } from 'react-router-dom';

const App: FC = () => {
  const auth = useAuth();

  const routes = useRoutes(!!auth.token);

  return (
    <Router>
      <ProvideAuth>
        <div>
          <GlobalStyles />
          <Header />
          <MainWrapper>{routes}</MainWrapper>
        </div>
      </ProvideAuth>
    </Router>
  );
};

export default App;
