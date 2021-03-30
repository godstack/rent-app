import { FC } from 'react';
import { useAuth } from 'hooks/useAuth';
import { StyledHeader, StyledLogo, StyledExitButton } from './styled';

const Header: FC = () => {
  const auth = useAuth();

  const handleSingOut = () => {
    auth.signout();
  };

  return (
    <StyledHeader>
      <StyledLogo>Оренда квартир</StyledLogo>
      {!!auth.token && (
        <StyledExitButton onClick={handleSingOut}>Вихід</StyledExitButton>
      )}
    </StyledHeader>
  );
};

export default Header;
