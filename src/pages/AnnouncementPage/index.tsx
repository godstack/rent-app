import { Loader } from 'components/Loader';
import { useAuth } from 'hooks/useAuth';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { IAnnouncement, RentApi } from 'RentApi';
import { format } from 'date-fns';
import { StyledCreatedAt } from 'components/Annoncement/styled';
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
      console.log('getAnnouncementById', res);

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

  console.log(announcement);

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
          {/* <StyledBlock>
            <StyledInfo>{announcement.price} грн./доба</StyledInfo>
            <StyledInfo> {announcement.title}</StyledInfo>
            <StyledInfo> {announcement.description}</StyledInfo>
            <StyledInfo>
              {announcement.city}. {announcement.realtyInformation.address}
            </StyledInfo>
            <StyledInfo>
              Опалення {announcement.realtyInformation.heatingType},{' '}
              {announcement.realtyInformation.roomCount}-комн. квартира,{' '}
              {announcement.realtyInformation.square} м², будинок{' '}
              {announcement.realtyInformation.year} року
            </StyledInfo>

            <StyledCreatedAt>
              {format(new Date(announcement.createdAt), 'dd.mm.yyyy hh:mm')}
            </StyledCreatedAt>
          </StyledBlock> */}

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

            <StyledCreatedAt>
              {format(new Date(announcement.createdAt), 'dd.MM.yyyy hh:mm')}
            </StyledCreatedAt>
          </StyledBlock>
        </>
      ) : (
        <StyledNoInfo>Такої об'яви не існує</StyledNoInfo>
      )}
    </StyledWrapper>
  );
};
