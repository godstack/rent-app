import { useAuth } from 'hooks/useAuth';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  RentApi,
  IAllAnnouncements,
  defaultAllAnnouncementsPayload
} from 'RentApi';
import { StyledForm, StyledMain, StyledFormTitle, StyledInput } from './styled';

const MainPage: FC = () => {
  const auth = useAuth();

  const { register, errors, handleSubmit } = useForm<IAllAnnouncements>();

  const onSubmit = (data: IAllAnnouncements) => {};

  const getAllAnnouncements = async (payload: IAllAnnouncements) => {
    if (!auth.token) return;

    try {
      const res = await RentApi.getAllAnnouncements(auth.token, payload);
      console.log(res);
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });
    }
  };

  useEffect(() => {
    getAllAnnouncements(defaultAllAnnouncementsPayload);
  }, []);

  console.log(errors);

  return (
    <StyledMain>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormTitle>Фільтр квартир</StyledFormTitle>
        <StyledInput
          name='fromPrice'
          placeholder='від'
          ref={register({ valueAsNumber: true })}
          type='text'
        />
        <StyledInput
          name='toPrice'
          placeholder='до'
          ref={register}
          type='text'
        />
        <StyledInput
          name='fromSquare'
          placeholder='від'
          ref={register}
          type='text'
        />
        <StyledInput
          name='toSquare'
          placeholder='до'
          ref={register}
          type='text'
        />

        <StyledInput
          name='fromYear'
          placeholder='від'
          ref={register}
          type='text'
        />
        <StyledInput
          name='toYear'
          placeholder='до'
          ref={register}
          type='text'
        />
        <StyledInput
          name='fromRoomCount'
          placeholder='від'
          ref={register}
          type='text'
        />
        <StyledInput
          name='toRoomCount'
          placeholder='до'
          ref={register}
          type='text'
        />
        <StyledInput
          name='fromDate'
          placeholder='від'
          ref={register}
          type='text'
        />
        <StyledInput
          name='toDate'
          placeholder='до'
          ref={register}
          type='text'
        />
      </StyledForm>
    </StyledMain>
  );
};

export default MainPage;
