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
  StyledLink,
  StyledReserveButton,
  StyledDescription
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
      <StyledLeftSide>
        {images?.[0] && <StyledImage imgSrc={images?.[0].path} />}
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
        <StyledDescription>
          <StyledBoldText>Опис:</StyledBoldText>опалення {heatingType},{' '}
          {announcement.description}
        </StyledDescription>
        <StyledCreatedAt>
          <span>
            {format(new Date(announcement.createdAt), 'dd.MM.yyyy hh:mm')}
          </span>
          <StyledReserveButton
            onClick={() => handlePostCommonRent(announcement.announcementId)}
          >
            Спільна оренда
          </StyledReserveButton>
          <StyledReserveButton
            onClick={() => handleReserve(announcement.announcementId)}
          >
            Забронювати
          </StyledReserveButton>
        </StyledCreatedAt>
      </StyledRightSide>
    </StyledAnnouncementWrapper>
  );
};
