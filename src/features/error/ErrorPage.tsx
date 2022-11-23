import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/Common';
import { Container } from '../../shared/styles/CommonStyled';
import { ErrorContent } from './ErrorStyled';
import { strings } from '../../localization/Localization';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(PATH.HOME);
  };

  return (
    <>
      <Container>
        <ErrorContent>
          <div>
            <p>{strings.error.feeling}</p>
            <p>{strings.error.notify}</p>
            <p>{strings.error.action}</p>
            <button onClick={handleGoHome}>{strings.error.go_home_btn}</button>
          </div>
        </ErrorContent>
      </Container>
    </>
  );
};

export default ErrorPage;
