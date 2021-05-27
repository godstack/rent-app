import { useAuth } from 'hooks/useAuth';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ICommonAnnouncement, RentApi } from 'RentApi';
import { Loader } from 'components/Loader';
import CommonAnnouncement from 'components/CommonAnnouncement';
import { StyledNoInfo } from './styled';
import { useQuery } from 'hooks/useQuery';

const CommonRentPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [announcements, setAnnouncements] = useState<ICommonAnnouncement[]>([]);

  const query = useQuery();

  const announcementId = query.get('announcementId');

  const auth = useAuth();

  const getCommonRent = async () => {
    if (!auth.token || !announcementId) return;

    setIsLoading(true);

    try {
      const res = await RentApi.getCommonRent(
        auth.token,
        parseInt(announcementId)
      );

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
    getCommonRent();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}

      {announcements.length ? (
        announcements.map(item => (
          <CommonAnnouncement announcement={item} key={item.phone} />
        ))
      ) : (
        <StyledNoInfo>Немає жодної сумісної об'яви</StyledNoInfo>
      )}
    </div>
  );
};

export default CommonRentPage;
