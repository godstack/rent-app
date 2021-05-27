import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IReserved } from 'RentApi';
import { format } from 'date-fns';
import {
  StyledAnnouncementWrapper,
  StyledBoldText,
  StyledImage,
  StyledLeftSide,
  StyledPrice,
  StyledRightSide,
  StyledTitle,
  StyledLink
} from '../Annoncement/styled';
import {
  StyledDateWrapper,
  StyledReservedDates,
  StyledDate,
  DateTitle
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
      <StyledLeftSide>
        {images?.[0] && <StyledImage imgSrc={images?.[0].path} />}
      </StyledLeftSide>
      <StyledRightSide>
        <StyledLink>
          <Link to={`/announcement/${announcementId}`}>
            {roomCount}-комн. квартира, {square} м², будинок {year} року
          </Link>
        </StyledLink>
        <StyledTitle>{title}</StyledTitle>
        <StyledPrice>{price} грн./доба</StyledPrice>
        <div>
          <StyledBoldText>Адрес:</StyledBoldText>
          {city}. {address}
        </div>
        <div>
          <StyledBoldText>Опис:</StyledBoldText>опалення {heatingType},{' '}
          {description}
        </div>

        <StyledDateWrapper>
          <StyledReservedDates>
            <DateTitle>Дата заселення</DateTitle>
            <StyledDate>
              {format(new Date(reserved.fromDate), 'dd.MM.yyyy')}
            </StyledDate>
          </StyledReservedDates>
          <StyledReservedDates>
            <DateTitle>Дата виселення</DateTitle>
            <StyledDate>
              {format(new Date(reserved.toDate), 'dd.MM.yyyy')}
            </StyledDate>
          </StyledReservedDates>
        </StyledDateWrapper>
      </StyledRightSide>
    </StyledAnnouncementWrapper>
  );
};
