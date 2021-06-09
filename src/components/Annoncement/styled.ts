import styled from 'styled-components';

export const StyledAnnouncementWrapper = styled.div`
  width: 800px;
  background: #fff;
  padding: 15px;
  box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
  display: grid;
  grid-template-areas:
    'image image link link link link link link'
    'image image title title title title title title'
    'image image price price price price price price'
    'image image address address address address address address'
    'image image description description description description description description'
    'image image date date . common_btn common_btn reserved_btn';
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 24px) 1fr 40px;
  align-items: center;
  gap: 5px 10px;
`;

export const StyledPrice = styled.div`
  grid-area: price;
  color: #f68e15;
  font-size: 18px;
`;

export const StyledBoldText = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const StyledTitle = styled.div`
  grid-area: title;
  font-size: 1.1rem;
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

export const StyledReserveButton = styled.div`
  grid-area: reserved_btn;
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

export const StyledCommonButton = styled(StyledReserveButton)`
  grid-area: common_btn;

  background: #2abf9f;

  &:hover {
    background: #26a388;
  }
`;

export const StyledDescription = styled.div`
  grid-area: description;
  white-space: pre-wrap;
`;

export const StyledDate = styled.div`
  grid-area: date;
`;

export const StyledAddress = styled.div`
  grid-area: address;
`;
