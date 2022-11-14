import { useEffect, useState } from 'react';
import { LogoutDiv } from '../logout/LogoutStyled';
import { useNavigate, useLocation } from 'react-router-dom';
import { ACCESS_TOKEN_KEY, LOGGED_STATUS, PATH } from '../../../constants/Common';

const Logout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(ACCESS_TOKEN_KEY) === LOGGED_STATUS) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [pathname]);

  const handleLogoutClick = () => {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY)
    navigate(PATH.HOME, { replace: true });
  }

  return (
    <LogoutDiv isDisplay={display}>
      <button onClick={handleLogoutClick}>Logout</button>
    </LogoutDiv>
  );
};

export default Logout;
