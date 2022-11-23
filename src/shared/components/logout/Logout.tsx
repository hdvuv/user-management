import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogoutDiv } from '../logout/LogoutStyled';
import { ACCESS_TOKEN_KEY, LOGGED_STATUS, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';

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
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    navigate(PATH.HOME, { replace: true });
  };

  return (
    <LogoutDiv isDisplay={display}>
      <button onClick={handleLogoutClick}>{strings.common.logout_btn}</button>
    </LogoutDiv>
  );
};

export default Logout;
