import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { RentApi } from 'RentApi';
import { toast } from 'react-toastify';
import { IRegister } from 'RentApi';
import {
  StyledErrorMessage,
  StyledFormTitle,
  StyledFormWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledLink,
  StyledLogo,
  StyledParagraph,
  StyledRadioWrapper,
  StyledSelect,
  StyledSubmit,
  StyledTextarea
} from '../styled';

type Inputs = {
  login: string;
  password: string;
  name: string;
  surname: string;
  age: string;
  sex: string;
  temperament: string;
  cook: string;
  activity: string;
  rest: string;
  status: string;
  conflict: string;
  pet: string;
  review: string;
};

const RegisterPage: FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const history = useHistory();

  const onSubmit = async (data: Inputs) => {
    try {
      const registerData: IRegister = {
        login: data.login,
        password: data.password,
        profile: {
          name: data.name,
          surname: data.surname,
          age: data.age,
          sex: data.sex,
          temperament: data.temperament,
          cook: data.cook,
          activity: data.activity,
          rest: data.rest,
          status: data.status,
          conflict: data.conflict,
          pet: data.pet,
          review: data.review
        }
      };

      await RentApi.register(registerData);
      toast('Реєстрація успішна! \n Авторизуйтесь', {
        type: 'success'
      });
      history.push('/login');
    } catch (e) {
      toast(e.message, {
        type: 'error'
      });
    }
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledFormTitle>Ласкаво просимо</StyledFormTitle>
        <StyledLogo>A</StyledLogo>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputWrapper>
            <StyledInput
              name='login'
              type='text'
              placeholder='електронна пошта'
              ref={register({
                required: { value: true, message: "Поле обов'язквое" },
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Введіть валідний емейл'
                }
              })}
            />
            {errors.login && (
              <StyledErrorMessage>{errors.login.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledInput
              name='password'
              type='password'
              placeholder='пароль'
              ref={register({
                required: { value: true, message: "Поле обов'язквое" },
                minLength: {
                  value: 6,
                  message: 'Мінімальна довжина 6 симолів'
                }
              })}
            />
            {errors.password && (
              <StyledErrorMessage>{errors.password.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledInput
              name='name'
              type='text'
              placeholder="Ім'я"
              ref={register({
                required: { value: true, message: "Поле обов'язквое" }
              })}
            />
            {errors.name && (
              <StyledErrorMessage>{errors.name.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledInput
              name='surname'
              type='text'
              placeholder='Фамілія'
              ref={register({
                required: { value: true, message: "Поле обов'язквое" }
              })}
            />
            {errors.surname && (
              <StyledErrorMessage>{errors.surname.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledInput
              name='age'
              type='text'
              placeholder='Кількість років'
              ref={register({
                required: { value: true, message: "Поле обов'язквое" },
                min: 0,
                max: 120
              })}
            />
            {errors.age && (
              <StyledErrorMessage>{errors.age.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph>Виберіть стать</StyledParagraph>

            <StyledSelect
              ref={register({
                required: { value: true, message: "Поле обов'язквое" }
              })}
              name='sex'
            >
              <option disabled selected value='' hidden></option>

              <option value='М'>М</option>
              <option value='Ж'>Ж</option>
            </StyledSelect>
            {errors.sex && (
              <StyledErrorMessage>{errors.sex.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph> Виберіть темперамент</StyledParagraph>

            <StyledSelect
              ref={register({
                required: { value: true, message: "Поле обов'язквое" }
              })}
              name='temperament'
            >
              <option disabled selected value='' hidden></option>

              <option value='Холерик'>Холерик</option>
              <option value='Сангвінік'>Сангвінік</option>
              <option value='Флегматик'>Флегматик</option>
              <option value='Меланхолік'>Меланхолік</option>
            </StyledSelect>
            {errors.temperament && (
              <StyledErrorMessage>
                {errors.temperament.message}
              </StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph> Вмієте готувати?</StyledParagraph>

            <StyledSelect
              ref={register({
                required: { value: true, message: "Поле обов'язквое" }
              })}
              name='cook'
            >
              <option disabled selected value='' hidden></option>

              <option value='Так'>Так</option>
              <option value='Ні'>Ні</option>
            </StyledSelect>
            {errors.cook && (
              <StyledErrorMessage>{errors.cook.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph>Тип активності</StyledParagraph>
            <StyledRadioWrapper>
              <input
                name='activity'
                type='radio'
                value='Сова'
                id='act1'
                ref={register({
                  required: { value: true, message: "Поле обов'язквое" }
                })}
              />
              <label htmlFor='act1'>Сова</label>
            </StyledRadioWrapper>
            <StyledRadioWrapper>
              <input
                name='activity'
                type='radio'
                value='Жайворонок'
                id='act2'
                ref={register({
                  required: { value: true, message: "Поле обов'язквое" }
                })}
              />
              <label htmlFor='act2'>Жайворонок</label>
            </StyledRadioWrapper>
            {errors.activity && (
              <StyledErrorMessage>{errors.activity.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph>
              Який відпочинок полюбляєте більше?
            </StyledParagraph>
            <StyledRadioWrapper>
              <input
                name='rest'
                type='radio'
                value='Спокійний'
                id='rest1'
                ref={register({
                  required: { value: true, message: "Поле обов'язквое" }
                })}
              />
              <label htmlFor='rest1'>Спокійний</label>
            </StyledRadioWrapper>
            <StyledRadioWrapper>
              <input
                name='rest'
                type='radio'
                value='Активний'
                id='rest2'
                ref={register({
                  required: { value: true, message: "Поле обов'язквое" }
                })}
              />
              <label htmlFor='rest2'>Активний</label>
            </StyledRadioWrapper>
            {errors.rest && (
              <StyledErrorMessage>{errors.rest.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph>Ваш статус</StyledParagraph>
            <StyledRadioWrapper>
              <input
                name='status'
                type='radio'
                value='Самотній'
                id='status1'
                ref={register({
                  required: { value: true, message: "Поле обов'язквое" }
                })}
              />
              <label htmlFor='status1'>Самотній</label>
            </StyledRadioWrapper>
            <StyledRadioWrapper>
              <input
                name='status'
                type='radio'
                value='В стосунках'
                id='status2'
                ref={register({
                  required: { value: true, message: "Поле обов'язквое" }
                })}
              />
              <label htmlFor='status2'>В стосунках</label>
            </StyledRadioWrapper>
            {errors.status && (
              <StyledErrorMessage>{errors.status.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph>На скільки ви конфліктна людина?</StyledParagraph>
            <StyledSelect
              ref={register({
                required: { value: true, message: "Поле обов'язквое" }
              })}
              name='conflict'
            >
              <option disabled selected value='' hidden></option>

              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </StyledSelect>
            {errors.conflict && (
              <StyledErrorMessage>{errors.conflict.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledParagraph>
              Готові жити разом з домашніми тваринами?
            </StyledParagraph>

            <StyledSelect
              ref={register({
                required: { value: true, message: "Поле обов'язквое" }
              })}
              name='pet'
            >
              <option disabled selected value='' hidden></option>
              <option value='Так'>Так</option>
              <option value='Ні'>Ні</option>
            </StyledSelect>
            {errors.pet && (
              <StyledErrorMessage>{errors.pet.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledTextarea
              name='review'
              placeholder='Опишіть себе коротко'
              ref={register}
            />
            {errors.review && (
              <StyledErrorMessage>{errors.review.message}</StyledErrorMessage>
            )}
          </StyledInputWrapper>

          <StyledSubmit type='submit'>Зареєструватись</StyledSubmit>
        </form>
        <StyledLink>
          <Link to='/login'>Вже маєте акаунт? Авторизуйтесь</Link>
        </StyledLink>
      </StyledFormWrapper>
    </>
  );
};

export default RegisterPage;
