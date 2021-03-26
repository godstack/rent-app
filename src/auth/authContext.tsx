import { FC, createContext } from 'react';

interface IAuth {
  token: string | null;
  signin: (newUser: string) => void;
  signout: () => void;
}

const defaultAuth: IAuth = {
  token: localStorage.getItem('token') || null,
  signin(newToken: string) {
    localStorage.setItem('token', newToken);
    defaultAuth.token = newToken;
  },
  signout() {
    defaultAuth.token = null;
    localStorage.clear();
  }
};

export const authContext = createContext(defaultAuth);

export const ProvideAuth: FC = ({ children }) => {
  return (
    <authContext.Provider value={defaultAuth}>{children}</authContext.Provider>
  );
};
