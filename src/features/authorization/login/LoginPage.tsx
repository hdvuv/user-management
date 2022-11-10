import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginForm, LoginContent } from './LoginStyled';
import { Container, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';

const LoginPage = () => {
  const { register, handleSubmit, } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    if (data?.username === 'admin' && data?.password === '1') {
      navigate('/list');
    } else {
      alert('Invalid username and password!')
    }
  };

  return (
    <>
      <Container>
        <LoginForm method='post' onSubmit={handleSubmit(onSubmit)}>
          <PageTittle>
            <p>Login system</p>
          </PageTittle>
          <LoginContent>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              {...register("username")} />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              {...register("password")} />
          </LoginContent>
          <ButtonDiv>
            <button type="submit">Login</button>
          </ButtonDiv>
        </LoginForm>
      </Container>
    </>
  );
}

export default LoginPage;
