import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { DetailContent } from './DetailStyled';

const DetailUser = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const handleBack = () => {
        navigate('/list', { replace: true });
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p >Detail user page</p>
                    </PageTittle>
                    <DetailContent>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>Nguyễn Văn A</td>
                            </tr>
                            <tr>
                                <td>Sex</td>
                                <td>Nam</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>0123456789</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>a.nv@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Ha Noi</td>
                            </tr>
                            <tr>
                                <td>Job</td>
                                <td>Developer</td>
                            </tr>
                            <tr>
                                <td>Position</td>
                                <td>Leader</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>Luvina SJC</td>
                            </tr>
                            <tr>
                                <td>Working address</td>
                                <td>106 Hoàng Quốc Việt</td>
                            </tr>
                        </table>
                    </DetailContent>
                    <ButtonDiv>
                        <button onClick={handleBack}>Back</button>
                    </ButtonDiv>
                </Wrapper>
            </Container>
        </>
    );
}

export default DetailUser;
