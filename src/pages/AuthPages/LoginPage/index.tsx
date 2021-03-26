import { FC } from 'react';
import { useForm } from 'react-hook-form';
import {
  StyledErrorMessage,
  StyledFormTitle,
  StyledFormWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledLogo,
  StyledSubmit
} from '../styled';

type Inputs = {
  email: string;
  password: string;
};

const LoginPage: FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <StyledFormWrapper>
      <StyledFormTitle>Ласкаво просимо</StyledFormTitle>
      <StyledLogo>A</StyledLogo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
          <StyledInput
            name='email'
            type='text'
            placeholder='email'
            ref={register}
          />
          {errors.email && (
            <StyledErrorMessage>{errors.email}</StyledErrorMessage>
          )}
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledInput
            name='password'
            type='password'
            placeholder='password'
            ref={register}
          />
          {errors.password && (
            <StyledErrorMessage>{errors.password}</StyledErrorMessage>
          )}
        </StyledInputWrapper>

        <StyledSubmit type='submit'>Авторизуватись</StyledSubmit>
      </form>
    </StyledFormWrapper>
  );
};

export default LoginPage;
