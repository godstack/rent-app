import { FC } from 'react';
import { useAuth } from 'hooks/useAuth';
import {
  StyledHeader,
  StyledLogo,
  StyledExitButton,
  StyledLink,
  LinksWrapper
} from './styled';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const auth = useAuth();

  const handleSingOut = () => {
    auth.signout();
  };

  return (
    <StyledHeader>
      <StyledLogo>Оренда квартир</StyledLogo>
      {!!auth.token && (
        <>
          <LinksWrapper>
            <StyledLink>
              <Link to='/main'>На головну</Link>
            </StyledLink>
          </LinksWrapper>
          <StyledExitButton onClick={handleSingOut}>Вихід</StyledExitButton>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
