import styled from 'styled-components';

export const StyledMain = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-areas: '. announcements';
  grid-template-columns: 500px 1fr;
  gap: 20px;
`;

export const StyledWrapper = styled.div`
  grid-area: announcements;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const StyledNoInfo = styled.div`
  margin-top: 30px;
  font-size: 1.3rem;
  color: red;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
`;
