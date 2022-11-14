import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/Common';
import { Container } from '../../shared/styles/CommonStyled';
import { ErrorContent } from './ErrorStyled';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(PATH.HOME);
    }

    return (
        <>
            <Container>
                <ErrorContent>
                    <div>
                        <p>Oops!</p>
                        <p>An error has occurred!</p>
                        <p>Let's go back to the login page!</p>
                        <button onClick={handleGoHome}>Go home</button>
                    </div>
                </ErrorContent>
            </Container>

        </>
    )
}

export default ErrorPage;
