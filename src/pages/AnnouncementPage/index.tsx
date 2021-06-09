import { Loader } from 'components/Loader';
import { useAuth } from 'hooks/useAuth';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { IAnnouncement, RentApi } from 'RentApi';
import { format } from 'date-fns';

import {
  StyledWrapper,
  StyledBlock,
  StyledNoInfo,
  StyledBlockName,
  StyledMainInfo,
  StyledMainInfoItem
} from './styled';

export const AnnouncementPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [announcement, setAnnouncement] = useState<IAnnouncement | null>(null);
  let { id } = useParams<{ id?: string | undefined }>();

  const auth = useAuth();
  const getAnnouncementById = async () => {
    if (!id || !auth.token) return;

    setIsLoading(true);

    try {
      const res = await RentApi.getAnnouncementById(id, auth.token);

      setAnnouncement(res.data);
      setIsLoading(false);
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAnnouncementById();
  }, []);

  if (isLoading) {
    return (
      <StyledWrapper>
        <Loader />
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      {!!announcement ? (
        <>
          <StyledBlock>
            <StyledBlockName>Опис</StyledBlockName>
            <StyledMainInfo>
              <StyledMainInfoItem>
                <div>{announcement.realtyInformation.roomCount}</div>
                <div>Кімнат</div>
              </StyledMainInfoItem>
              <StyledMainInfoItem>
                <div>{announcement.realtyInformation.square} м²</div>
                <div>Площа</div>
              </StyledMainInfoItem>
              <StyledMainInfoItem>
                <div>{announcement.realtyInformation.heatingType}</div>
                <div>Вид опалення</div>
              </StyledMainInfoItem>
              <StyledMainInfoItem>
                <div>{announcement.realtyInformation.year}</div>
                <div>Рік будівництва</div>
              </StyledMainInfoItem>

              <StyledMainInfoItem>
                <div>{announcement.city}</div>
                <div>Місто</div>
              </StyledMainInfoItem>

              <StyledMainInfoItem>
                <div>{announcement.price} грн./доба</div>
                <div>Ціна</div>
              </StyledMainInfoItem>
            </StyledMainInfo>
            <div>
              <div>{announcement.title}</div>
              <div>{announcement.description}</div>
            </div>

            <div>
              {format(new Date(announcement.createdAt), 'dd.MM.yyyy hh:mm')}
            </div>
          </StyledBlock>
        </>
      ) : (
        <StyledNoInfo>Такої об'яви не існує</StyledNoInfo>
      )}
    </StyledWrapper>
  );
};
