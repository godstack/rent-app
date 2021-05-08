import styled from 'styled-components';

export const StyledAnnouncementWrapper = styled.div`
  width: 100%;
  background: #fce8ab;
  margin-top: 20px;
  padding: 15px;
  box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
  display: flex;
`;

export const StyledLeftSide = styled.div`
  width: 100px;
  margin-right: 15px;
`;

export const StyledRightSide = styled.div`
  flex-grow: 1;
`;

export const StyledPrice = styled.div`
  color: #f68e15;
  font-size: 18px;
`;

export const StyledBoldText = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledCreatedAt = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.div`
  font-size: 1.1rem;
`;

export const StyledImage = styled.div<{ imgSrc: string }>`
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100px;
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledLink = styled.div`
  a {
    cursor: pointer;
    font-size: 1.3rem;
    color: #51adf6;

    transition: text-decoration 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #51add5;
    }
  }
`;

export const StyledReserveButton = styled.div`
  padding: 8px 16px;
  background: #0071c2;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  width: fit-content;

  &:hover {
    background: #0071b1;
  }
`;

export const StyledDescription = styled.div`
  white-space: pre-wrap;
`;
