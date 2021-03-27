import { FC } from 'react';
import { StyledHeader, StyledLogo } from './styled';

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>Оренда квартир</StyledLogo>
    </StyledHeader>
  );
};

export default Header;
