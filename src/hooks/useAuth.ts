import { useContext } from 'react';
import { authContext } from 'auth/authContext';

export const useAuth = () => {
  return useContext(authContext);
};
