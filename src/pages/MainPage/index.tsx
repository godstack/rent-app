import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Announcement } from 'components/Annoncement';
import { Loader } from 'components/Loader';
import { useAuth } from 'hooks/useAuth';

import {
  RentApi,
  IAllAnnouncements,
  defaultAllAnnouncementsPayload,
  IAnnouncement
} from 'RentApi';
import { StyledMain } from './styled';
import { FilterForm } from 'components/FilterForm';

const MainPage: FC = () => {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  const getAllAnnouncements = async (payload: IAllAnnouncements) => {
    if (!auth.token) return;

    setIsLoading(true);

    try {
      const res = await RentApi.getAllAnnouncements(auth.token, payload);
      console.log(res);

      setAnnouncements(res.data.items);

      setIsLoading(false);
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllAnnouncements(defaultAllAnnouncementsPayload);
  }, []);

  return (
    <StyledMain>
      <FilterForm getAllAnnouncements={getAllAnnouncements} />
      {isLoading && <Loader />}

      {announcements.map(item => (
        <Announcement announcement={item} />
      ))}
    </StyledMain>
  );
};

export default MainPage;
