import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IAnnouncement } from 'RentApi';
import { format } from 'date-fns';
import {
  StyledAnnouncementWrapper,
  StyledBoldText,
  StyledImage,
  StyledPrice,
  StyledTitle,
  StyledLink,
  StyledReserveButton,
  StyledDescription,
  StyledDate,
  StyledAddress,
  StyledCommonButton
} from './styled';

interface IProps {
  announcement: IAnnouncement;
  handleReserve: (announcementId: number) => void;
  handlePostCommonRent: (announcementId: number) => void;
}

export const Announcement: FC<IProps> = ({
  announcement,
  handleReserve,
  handlePostCommonRent
}) => {
  const { address, heatingType, roomCount, square, year, images } =
    announcement.realtyInformation;

  return (
    <StyledAnnouncementWrapper>
      {images?.[0] && <StyledImage imgSrc={images?.[0].path} />}

      <StyledLink>
        <Link to={`/announcement/${announcement.announcementId}`}>
          {roomCount}-комн. квартира, {square} м², будинок {year} року
        </Link>
      </StyledLink>
      <StyledTitle>{announcement.title}</StyledTitle>
      <StyledPrice>{announcement.price} грн./доба</StyledPrice>
      <StyledAddress>
        <StyledBoldText>Адрес:</StyledBoldText>
        {announcement.city}. {address}
      </StyledAddress>
      <StyledDescription>
        <StyledBoldText>Опис:</StyledBoldText>опалення {heatingType},{' '}
        {announcement.description}
      </StyledDescription>

      <StyledDate>
        {format(new Date(announcement.createdAt), 'dd.MM.yyyy hh:mm')}
      </StyledDate>
      <StyledCommonButton
        onClick={() => handlePostCommonRent(announcement.announcementId)}
      >
        Спільна оренда
      </StyledCommonButton>
      <StyledReserveButton
        onClick={() => handleReserve(announcement.announcementId)}
      >
        Забронювати
      </StyledReserveButton>
    </StyledAnnouncementWrapper>
  );
};
