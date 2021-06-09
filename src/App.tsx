import { FC } from 'react';
import Header from './components/Header';
import { GlobalStyles } from './globalStyles';
import { useRoutes } from 'hooks/useRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
  let routes = useRoutes();

  return (
    <Router>
      <div>
        <GlobalStyles />
        <Header />
        <main>{routes}</main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
