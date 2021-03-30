import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IAnnouncement } from 'RentApi';
import { format } from 'date-fns';
import {
  StyledAnnouncementWrapper,
  StyledBoldText,
  StyledCreatedAt,
  StyledImage,
  StyledLeftSide,
  StyledPrice,
  StyledRightSide,
  StyledTitle,
  StyledLink
} from './styled';

interface IProps {
  announcement: IAnnouncement;
}

export const Announcement: FC<IProps> = ({ announcement }) => {
  const {
    address,
    heatingType,
    roomCount,
    square,
    year
  } = announcement.realtyInformation;

  console.log(announcement);

  return (
    <StyledAnnouncementWrapper>
      <StyledLeftSide>
        <StyledImage />
      </StyledLeftSide>
      <StyledRightSide>
        <StyledLink>
          <Link to={`/announcement/${announcement.announcementId}`}>
            {roomCount}-комн. квартира, {square} м², будинок {year} року
          </Link>
        </StyledLink>
        <StyledTitle>{announcement.title}</StyledTitle>
        <StyledPrice>{announcement.price} грн./доба</StyledPrice>
        <div>
          <StyledBoldText>Адрес:</StyledBoldText>
          {announcement.city}. {address}
        </div>
        <div>
          <StyledBoldText>Опис:</StyledBoldText>опалення {heatingType},{' '}
          {announcement.description}
        </div>
        <StyledCreatedAt>
          {format(new Date(announcement.createdAt), 'dd.mm.yyyy hh:mm')}
        </StyledCreatedAt>
      </StyledRightSide>
    </StyledAnnouncementWrapper>
  );
};
