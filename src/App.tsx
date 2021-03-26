import { FC } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { GlobalStyles } from './globalStyles';

const App: FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      app
    </div>
  );
};

export default App;
