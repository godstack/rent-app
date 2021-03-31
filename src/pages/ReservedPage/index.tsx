import { Loader } from 'components/Loader';
import { ReservedAnnouncement } from 'components/ReservedAnnouncement';
import { useAuth } from 'hooks/useAuth';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IReserved, RentApi } from 'RentApi';
import { StyledWrapper, StyledNoInfo, Title } from './styled';

export const ReservedPage: FC = () => {
  const auth = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [reserved, setReserved] = useState<IReserved[]>([]);

  const getRent = async () => {
    if (!auth.token) return;
    setIsLoading(true);

    try {
      const res = await RentApi.getRent(auth.token);
      console.log('reserved', res.data);
      setReserved(res.data);

      setIsLoading(false);
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRent();
  }, []);
  return (
    <StyledWrapper>
      {isLoading && <Loader />}

      <Title>Заброньовані</Title>

      {reserved.length ? (
        reserved.map(item => (
          <ReservedAnnouncement key={item.rentInformationId} reserved={item} />
        ))
      ) : (
        <StyledNoInfo>
          Немає жодної об'яви, що відповідає вибраним фільтрам
        </StyledNoInfo>
      )}
    </StyledWrapper>
  );
};
