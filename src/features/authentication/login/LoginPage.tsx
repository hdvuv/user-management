import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginForm, LoginContent } from './LoginStyled';
import { Container, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { Admin, useGetAdminsQuery } from "../../../services/admin/adminApi";
import { useEffect, useState } from "react";
import { ERROR_MSG, PATH } from "../../../constants/Common";

const LoginPage = () => {
  const navigate = useNavigate()
  const { data, error, isLoading } = useGetAdminsQuery();
  const { register, handleSubmit, } = useForm();
  const [admins, setAdmins] = useState<Array<Admin>>([]);

  useEffect(() => {
    if (data) {
      setAdmins([...data]);
    }
  }, [isLoading])

  const onSubmit = (data: any) => {
    if (checkExistAdmin(admins, data)) {
      sessionStorage.setItem('access-token', 'LOGGED')
      navigate(PATH.LIST, { replace: true });
    } else {
      alert(ERROR_MSG.INVALID_LOGIN)
    }
  };

  // authenticate
  const checkExistAdmin = (admins: Admin[], data: { username: any; password: any; }) => {
    for (const admin of admins) {
      if (data?.username === admin.username &&
        data?.password === admin.password) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <Container isDisplay={true}>
        <LoginForm method='post' onSubmit={handleSubmit(onSubmit)}>
          <PageTittle>
            <p>Login</p>
          </PageTittle>
          <LoginContent>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              {...register("username")}
              required
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              {...register("password")}
              required
            />
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
