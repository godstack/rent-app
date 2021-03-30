import { Loader } from 'components/Loader';
import { useAuth } from 'hooks/useAuth';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { IAnnouncement, RentApi } from 'RentApi';
import { StyledWrapper, StyledBlock, StyledNoInfo } from './styled';

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

  return (
    <StyledWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!!announcement ? (
            <>
              AnnouncementPage: {id}
              <StyledBlock>block</StyledBlock>
            </>
          ) : (
            <StyledNoInfo>Такої об'яви не існує</StyledNoInfo>
          )}
        </>
      )}
    </StyledWrapper>
  );
};
