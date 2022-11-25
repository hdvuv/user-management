import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoginForm, LoginContent } from './LoginStyled';
import { Container, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { Admin, useGetAdminsQuery } from '../../../services/admin/adminApi';
import { ACCESS_TOKEN_KEY, ERROR_MSG, LOGGED_STATUS, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { data, isLoading } = useGetAdminsQuery();
  const [admins, setAdmins] = useState<Array<Admin>>([]);

  /**
   * Wait for the system to call the admin API
   */
  useEffect(() => {
    if (data) {
      setAdmins([...data]);
    }
  }, [isLoading]);

  /**
   * If already logged in, move to the list user screen
   */
  useEffect(() => {
    if (sessionStorage.getItem(ACCESS_TOKEN_KEY) === LOGGED_STATUS) {
      navigate(PATH.LIST, { replace: true });
    }
  }, []);

  /**
   * Handle for click button login
   *
   * @param data object contain username and password entered by the user
   */
  const onSubmit = (data: any) => {
    if (checkExistAdmin(admins, data)) {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, LOGGED_STATUS);
      navigate(PATH.LIST, { replace: true });
    } else {
      alert(ERROR_MSG.INVALID_LOGIN);
    }
  };

  /**
   * Check that the information entered by the user matches the system admin information
   *
   * @param admins array contain data from call the admin API
   * @param data object contain username and password entered by the user
   * @returns true if the information is correct, otherwise return false
   */
  const checkExistAdmin = (admins: Admin[], data: { username: any; password: any }) => {
    for (const admin of admins) {
      if (data?.username === admin.username && data?.password === admin.password) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <Container isDisplay={true}>
        <LoginForm method="post" onSubmit={handleSubmit(onSubmit)}>
          <PageTittle>
            <p>{strings.login.login_title}</p>
          </PageTittle>
          <LoginContent>
            <label htmlFor="username">{strings.login.username}</label>
            <input type="text" {...register('username')} required />
            <label htmlFor="password">{strings.login.password}</label>
            <input type="password" {...register('password')} required />
          </LoginContent>
          <ButtonDiv>
            <button type="submit">{strings.login.login_btn}</button>
          </ButtonDiv>
        </LoginForm>
      </Container>
    </>
  );
};

export default LoginPage;
