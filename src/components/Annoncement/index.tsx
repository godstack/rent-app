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
    year,
    images
  } = announcement.realtyInformation;

  console.log(images);

  return (
    <StyledAnnouncementWrapper>
      <StyledLeftSide>
        <img src='../../images/Test1.png' alt='Test1.png' />
        {images?.[0] && <StyledImage imgSrc='../../images/Test1.png' />}
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
          {format(new Date(announcement.createdAt), 'dd.MM.yyyy hh:mm')}
        </StyledCreatedAt>
      </StyledRightSide>
    </StyledAnnouncementWrapper>
  );
};
