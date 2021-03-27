import { FC, useEffect } from 'react';
import Header from './components/Header';
import { GlobalStyles, MainWrapper } from './globalStyles';
import { useRoutes } from 'hooks/useRoutes';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useAuth } from 'hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
  const auth = useAuth();

  let routes = useRoutes(!!auth.token);

  return (
    <Router>
      <div>
        <GlobalStyles />
        <Header />
        <MainWrapper>{routes}</MainWrapper>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
