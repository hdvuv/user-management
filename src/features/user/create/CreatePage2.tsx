import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent} from './CreateStyle';

const CreateUser2 = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const handleBack = () => {
        navigate('/create1', { replace: true });
    }

    const handleNext = () => {
        navigate('/confirm', { replace: true });
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>Create user (2) page</p>
                    </PageTittle>
                    <CreateContent>
                        <table>
                            <tr>
                                <th>Job</th>
                                <td>
                                    <input
                                        type='text'
                                        className='job'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Position</th>
                                <td>
                                    <input
                                        type='text'
                                        className='position'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Company</th>
                                <td>
                                    <input
                                        type='text'
                                        className='company'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Working address</th>
                                <td>
                                    <input
                                        type='text'
                                        className='working-address'
                                    />
                                </td>
                            </tr>
                        </table>
                    </CreateContent>
                    <ButtonDiv>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Next</button>
                    </ButtonDiv>
                </Wrapper>
            </Container>
        </>
    );
}

export default CreateUser2;
