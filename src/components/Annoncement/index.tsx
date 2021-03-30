import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IAnnouncement } from 'RentApi';
import {
  StyledAnnouncementWrapper,
  StyledLeftSide,
  StyledRightSide
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
      <StyledLeftSide></StyledLeftSide>
      <StyledRightSide>
        <Link to={`/announcement/${announcement.announcementId}`}>
          {roomCount}-комн. квартира, {square} м², будинок {year} року
        </Link>
      </StyledRightSide>
    </StyledAnnouncementWrapper>
  );
};
