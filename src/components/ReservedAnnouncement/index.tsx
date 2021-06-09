import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IReserved } from 'RentApi';
import { format } from 'date-fns';

import {
  StyledImage,
  StyledAnnouncementWrapper,
  StyledDate,
  DateTitle,
  StyledLink,
  StyledTitle,
  StyledPrice,
  StyledBoldText,
  StyledAddress,
  StyledDescription,
  StyledReservedTo,
  StyledReservedFrom
} from './styled';

interface IProps {
  reserved: IReserved;
}

export const ReservedAnnouncement: FC<IProps> = ({ reserved }) => {
  const { address, heatingType, roomCount, square, year, images } =
    reserved.announcement.realtyInformation;

  const { city, createdAt, price, announcementId, title, description } =
    reserved.announcement;

  return (
    <StyledAnnouncementWrapper>
      {images?.[0] && <StyledImage imgSrc={images?.[0].path} />}

      <StyledLink>
        <Link to={`/announcement/${announcementId}`}>
          {roomCount}-комн. квартира, {square} м², будинок {year} року
        </Link>
      </StyledLink>
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>{price} грн./доба</StyledPrice>
      <StyledAddress>
        <StyledBoldText>Адрес:</StyledBoldText>
        {city}. {address}
      </StyledAddress>
      <StyledDescription>
        <StyledBoldText>Опис:</StyledBoldText>опалення {heatingType},{' '}
        {description}
      </StyledDescription>

      <StyledReservedFrom>
        <DateTitle>Дата заселення</DateTitle>
        <StyledDate>
          {format(new Date(reserved.fromDate), 'dd.MM.yyyy')}
        </StyledDate>
      </StyledReservedFrom>
      <StyledReservedTo>
        <DateTitle>Дата виселення</DateTitle>
        <StyledDate>
          {format(new Date(reserved.toDate), 'dd.MM.yyyy')}
        </StyledDate>
      </StyledReservedTo>
    </StyledAnnouncementWrapper>
  );
};
