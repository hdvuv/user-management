import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent} from './CreateStyle';

const CreateUser1 = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const handleBack = () => {
        navigate('/list', { replace: true });
    }

    const handleNext = () => {
        navigate('/create2', { replace: true });
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>Create user (1) page</p>
                    </PageTittle>
                    <CreateContent>
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>
                                    <input
                                        type='text'
                                        className='name'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>
                                    <input
                                        type='text'
                                        className='phone'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    <input
                                        type='text'
                                        className='email'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>
                                    <input
                                        type='text'
                                        className='address'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Sex</th>
                                <td>
                                    <input
                                        type='text'
                                        className='sex'
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

export default CreateUser1;
