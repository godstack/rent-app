import { useState } from 'react';

export const useProvideAuth = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token') || null
  );

  const signin = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const signout = () => {
    localStorage.clear();
    setToken(null);
  };

  return {
    token,
    signin,
    signout
  };
};
