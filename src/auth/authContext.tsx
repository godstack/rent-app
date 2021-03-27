import { useProvideAuth } from 'hooks/useProvideAuth';
import { FC, createContext } from 'react';

interface IAuth {
  token: string | null;
  signin: (newUser: string) => void;
  signout: () => void;
}

const defaultAuth: IAuth = {
  token: localStorage.getItem('token') || null,
  signin(newToken: string) {},
  signout() {}
};

export const authContext = createContext(defaultAuth);

export const ProvideAuth: FC = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
