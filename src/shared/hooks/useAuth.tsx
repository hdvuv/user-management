import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_KEY, LOGGED_STATUS, PATH } from '../../constants/Common';

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(ACCESS_TOKEN_KEY) !== LOGGED_STATUS) {
      navigate(PATH.HOME, { replace: true });
    }
  }, []);

  return <></>;
};

export default useAuth;
