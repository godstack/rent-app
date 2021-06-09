import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Announcement } from 'components/Annoncement';
import { Loader } from 'components/Loader';
import { useAuth } from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';

import {
  RentApi,
  IAllAnnouncements,
  defaultAllAnnouncementsPayload,
  IAnnouncement
} from 'RentApi';
import { StyledMain, StyledNoInfo, Title, StyledWrapper } from './styled';
import { FilterForm } from 'components/FilterForm';

interface IDate {
  fromDate: Date | null;
  toDate: Date | null;
}

const MainPage: FC = () => {
  const auth = useAuth();

  const [dates, setDates] = useState<IDate>({
    fromDate: null,
    toDate: null
  });

  const [isLoading, setIsLoading] = useState(false);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  const history = useHistory();

  const getAllAnnouncements = async (payload: IAllAnnouncements) => {
    if (!auth.token) return;

    setIsLoading(true);

    try {
      const res = await RentApi.getAllAnnouncements(auth.token, payload);

      setAnnouncements(res.data.items);

      setIsLoading(false);
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });

      setIsLoading(false);
    }
  };

  const handleReserve = async (announcementId: number) => {
    if (!auth.token) return;

    if (!dates?.fromDate || !dates?.toDate) {
      toast('Виберіть дати бронювання у фільтрі', {
        type: 'error'
      });

      return;
    }

    const preparedData = {
      announcementId,
      fromDate: new Date(dates.fromDate).toISOString(),
      toDate: new Date(dates.toDate).toISOString()
    };

    try {
      await RentApi.postRent(auth.token, preparedData);

      getAllAnnouncements(defaultAllAnnouncementsPayload);
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });
    }
  };

  const handlePostCommonRent = async (announcementId: number) => {
    if (!auth.token) return;

    try {
      await RentApi.postCommonRent(auth.token, announcementId);

      history.push(`/commonRent?announcementId=${announcementId}`);
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });
    }
  };

  const handleSetDates = (name: string, value: string) => {
    setDates({ ...dates, [name]: value });
  };

  useEffect(() => {
    getAllAnnouncements(defaultAllAnnouncementsPayload);
  }, []);

  return (
    <StyledMain>
      <FilterForm
        getAllAnnouncements={getAllAnnouncements}
        setDates={handleSetDates}
      />

      {isLoading && <Loader />}

      <StyledWrapper>
        <Title>Усі оголошення</Title>

        {announcements.length ? (
          announcements.map(item => (
            <Announcement
              announcement={item}
              key={item.announcementId}
              handleReserve={handleReserve}
              handlePostCommonRent={handlePostCommonRent}
            />
          ))
        ) : (
          <StyledNoInfo>
            Немає жодної об'яви, що відповідає вибраним фільтрам
          </StyledNoInfo>
        )}
      </StyledWrapper>
    </StyledMain>
  );
};

export default MainPage;
