import React, { ChangeEvent, FC } from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

import { defaultAllAnnouncementsPayload, IAllAnnouncements } from 'RentApi';
import {
  StyledForm,
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledInputText,
  StyledDateInputWrapper,
  StyledSubmit,
  StyledSelect,
  StyledErrorMessage,
  ResetButton,
  StyledButtonsWrapper
} from './styled';

interface IDate {
  fromDate: Date | null;
  toDate: Date | null;
}
interface IProps {
  getAllAnnouncements: (payload: IAllAnnouncements) => void;
  setDates: (name: string, value: string) => void;
}

export const FilterForm: FC<IProps> = ({ getAllAnnouncements, setDates }) => {
  const {
    register,
    errors,
    handleSubmit,
    setError,
    reset
  } = useForm<IAllAnnouncements>({
    defaultValues: defaultAllAnnouncementsPayload
  });

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDates(name, value);
  };

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

    getAllAnnouncements(preparedData);
  };

  const handleClearFilter = () => {
    reset(defaultAllAnnouncementsPayload);

    getAllAnnouncements(defaultAllAnnouncementsPayload);
  };

  return (
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
            onChange={handleChangeDate}
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
            onChange={handleChangeDate}
            type='date'
          />
          {errors.toDate && (
            <StyledErrorMessage>{errors.toDate.message}</StyledErrorMessage>
          )}
        </StyledDateInputWrapper>
      </StyledLabel>

      <StyledButtonsWrapper>
        <ResetButton onClick={handleClearFilter}>Очистити фільтр</ResetButton>
        <StyledSubmit type='submit'>Пошук</StyledSubmit>
      </StyledButtonsWrapper>
    </StyledForm>
  );
};
