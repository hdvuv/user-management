
import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { ConfirmContent } from './ConfirmStyled';

const ConfirmPage = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const handleBack1 = () => {
        navigate('/create1', { replace: true });
    }

    const handleBack2 = () => {
        navigate('/create2', { replace: true });
    }


    const handleNext = () => {
        navigate('/list', { replace: true });
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p className='page-title'>CONFIRM USER PAGE</p>
                    </PageTittle>
                    <ConfirmContent>
                        <div className='table1'>
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
                            </table>
                        </div>
                        <ButtonDiv>
                            <button onClick={handleBack1} >Back</button>
                        </ButtonDiv>
                    </ConfirmContent>
                    <ConfirmContent>
                        <div className='table2'>
                            <table>
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
                        </div>
                        <ButtonDiv>
                            <button onClick={handleBack2}>Back</button>
                        </ButtonDiv>
                    </ConfirmContent>
                    <ButtonDiv>
                        <button onClick={handleNext}>Next</button>
                    </ButtonDiv>
                </Wrapper>
            </Container>
        </>
    );
}

export default ConfirmPage;