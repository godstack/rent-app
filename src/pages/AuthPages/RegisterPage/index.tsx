import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { RentApi } from 'RentApi';
import { toast } from 'react-toastify';
import {
  StyledErrorMessage,
  StyledFormTitle,
  StyledFormWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledLink,
  StyledLogo,
  StyledSubmit
} from '../styled';

type Inputs = {
  login: string;
  password: string;
};

const RegisterPage: FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const history = useHistory();

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await RentApi.register(data);

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
              placeholder='email'
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
              placeholder='password'
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
