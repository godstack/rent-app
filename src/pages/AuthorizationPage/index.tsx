import { FC } from 'react';
import { useForm } from 'react-hook-form';
// import {} from './styled';

type Inputs = {
  email: string;
  password: string;
};

const AuthorizationPage: FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='email' ref={register} />
        <input name='password' ref={register} />

        <input type='submit' />
      </form>
    </div>
  );
};

export default AuthorizationPage;
