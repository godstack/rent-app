import styled from 'styled-components';

export const StyledAnnouncementWrapper = styled.div`
  width: 800px;
  background: #fff;
  padding: 15px;
  box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
  border-radius: 10px;
  display: grid;
  grid-template-areas:
    'image image link link link link link link'
    'image image title title title title title title'
    'image image price price price price price price'
    'image image address address address address address address'
    'image image description description description description description description'
    'image image from_date from_date . . to_date to_date';
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 24px) 1fr 40px;
  align-items: center;
  gap: 5px 10px;
`;

export const StyledReservedFrom = styled.div`
  grid-area: from_date;
  text-align: center;
  font-weight: bold;
`;

export const StyledReservedTo = styled(StyledReservedFrom)`
  grid-area: to_date;
`;

export const StyledImage = styled.div<{ imgSrc: string }>`
  grid-area: image;
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f2f3f5;
  border-radius: 5px;
`;

export const StyledDate = styled.div`
  margin-top: 5px;
  color: #0398fc;
`;

export const DateTitle = styled.div`
  margin-top: 5px;
`;

export const StyledLink = styled.div`
  grid-area: link;
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

export const StyledTitle = styled.div`
  grid-area: title;
  font-size: 1.1rem;
`;

export const StyledPrice = styled.div`
  grid-area: price;
  color: #f68e15;
  font-size: 18px;
`;

export const StyledAddress = styled.div`
  grid-area: address;
`;

export const StyledBoldText = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledDescription = styled.div`
  grid-area: description;
  white-space: pre-wrap;
`;
