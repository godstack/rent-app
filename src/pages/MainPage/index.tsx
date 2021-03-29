import { useAuth } from 'hooks/useAuth';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  RentApi,
  IAllAnnouncements,
  defaultAllAnnouncementsPayload
} from 'RentApi';
import {
  StyledForm,
  StyledMain,
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledInputText,
  StyledDateInputWrapper,
  StyledSubmit,
  StyledSelect,
  StyledErrorMessage
} from './styled';

const MainPage: FC = () => {
  const auth = useAuth();

  const {
    register,
    errors,
    handleSubmit,
    setError
  } = useForm<IAllAnnouncements>({
    defaultValues: defaultAllAnnouncementsPayload
  });

  const onSubmit = (data: IAllAnnouncements) => {
    if (data.fromDate > data.toDate) {
      setError('fromDate', {
        message: ''
      });

      toast(
        'Дата початку бронювання має бути більше ніж дата завершення бронювання',
        { type: 'error' }
      );
    }

    if (data.fromPrice > data.toPrice) {
      setError('fromPrice', {
        message: ''
      });

      toast('Початкова ціна має бути більша, ніж кінцева', { type: 'error' });
    }

    if (data.fromRoomCount > data.toRoomCount) {
      setError('fromRoomCount', {
        message: ''
      });

      toast('Мінімальна кількість кімнат має бути більша, ніж максимальна', {
        type: 'error'
      });
    }

    if (data.fromSquare > data.toSquare) {
      setError('fromSquare', {
        message: ''
      });

      toast('Мінімальна площа має бути більша, ніж максимальна', {
        type: 'error'
      });
    }

    if (data.fromYear > data.toYear) {
      setError('fromSquare', {
        message: ''
      });

      toast('Мінімальний рік має бути більшим, ніж максимальний', {
        type: 'error'
      });
    }

    const preparedData = {
      ...data,
      fromDate: new Date(data.fromDate).toISOString(),
      toDate: new Date(data.toDate).toISOString()
    };

    console.log(preparedData);

    getAllAnnouncements(preparedData);
  };

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

  return (
    <StyledMain>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormTitle>Фільтр квартир</StyledFormTitle>
        <StyledLabel>
          <StyledInputText>Місто</StyledInputText>

          <StyledInput
            name='city'
            placeholder='місто'
            ref={register}
            type='text'
          />

          <StyledSelect name='heatingType' ref={register}>
            <option value='' disabled hidden>
              Вид опалення
            </option>
            <option value='Власне'>Власне</option>
            <option value='Центральне'>Центральне</option>
            <option value='Індивідуальне'>Індивідуальне</option>
          </StyledSelect>
        </StyledLabel>
        <StyledLabel>
          <StyledInputText>Ціна, грн.</StyledInputText>

          <StyledInput
            name='fromPrice'
            placeholder='від'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
          <StyledInput
            name='toPrice'
            placeholder='до'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
        </StyledLabel>

        <StyledLabel>
          <StyledInputText>Площа, м²</StyledInputText>

          <StyledInput
            name='fromSquare'
            placeholder='від'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
          <StyledInput
            name='toSquare'
            placeholder='до'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
        </StyledLabel>

        <StyledLabel>
          <StyledInputText>Рік</StyledInputText>

          <StyledInput
            name='fromYear'
            placeholder='від'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
          <StyledInput
            name='toYear'
            placeholder='до'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
        </StyledLabel>

        <StyledLabel>
          <StyledInputText>Кількість кімнат</StyledInputText>

          <StyledInput
            name='fromRoomCount'
            placeholder='від'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
          <StyledInput
            name='toRoomCount'
            placeholder='до'
            ref={register({
              valueAsNumber: true
            })}
            type='number'
          />
        </StyledLabel>

        <StyledLabel>
          <StyledInputText>Дата</StyledInputText>

          <StyledDateInputWrapper>
            <span>Від</span>
            <StyledInput
              name='fromDate'
              placeholder='від'
              ref={register({
                required: { value: true, message: "Обо'язкове поле" }
              })}
              type='date'
            />
            {errors.fromDate && (
              <StyledErrorMessage>{errors.fromDate.message}</StyledErrorMessage>
            )}
          </StyledDateInputWrapper>

          <StyledDateInputWrapper>
            <span>До</span>

            <StyledInput
              name='toDate'
              placeholder='до'
              ref={register({
                required: { value: true, message: "Обо'язкове поле" }
              })}
              type='date'
            />
            {errors.toDate && (
              <StyledErrorMessage>{errors.toDate.message}</StyledErrorMessage>
            )}
          </StyledDateInputWrapper>
        </StyledLabel>

        <StyledSubmit type='submit'>Пошук</StyledSubmit>
      </StyledForm>
    </StyledMain>
  );
};

export default MainPage;
