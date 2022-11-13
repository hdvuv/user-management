
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../redux/store/store';
import { useCreateUserMutation } from '../../../services/user/userApi';
import { userSelector } from '../../../services/user/userSlice';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { ConfirmContent } from './ConfirmStyled';

const ConfirmPage = () => {
    const navigate = useNavigate();
    const user = useTypedSelector(userSelector).user;
    const [createUser, createUserResult] = useCreateUserMutation();

    const handleBack1 = () => {
        navigate('/create1', { replace: true });
    }

    const handleBack2 = () => {
        navigate('/create2', { replace: true });
    }

    const handleNext = async () => {
        createUser({
            name: user.name,
            sex: user.sex,
            phone: user.phone,
            email: user.email,
            address: user.address,
            job: user.job,
            company: user.company,
            position: user.position,
            workingAddress: user.workingAddress
        });
    }

    useEffect(() => {
        if (createUserResult.isUninitialized) return;
        navigate('/list', { replace: true });
    }, [createUserResult.isSuccess]);

    if (createUserResult.isLoading) return (<> Loading...</>);
    if (createUserResult.isError) return (<> Oh no, there was an error</>);

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>Confirm user page</p>
                    </PageTittle>
                    <ConfirmContent>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <td>Sex</td>
                                    <td>{user.sex}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{user.address}</td>
                                </tr>
                            </tbody>
                        </table>
                        <ButtonDiv>
                            <button onClick={handleBack1} >Back</button>
                        </ButtonDiv>
                    </ConfirmContent>
                    <ConfirmContent>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Job</td>
                                    <td>{user.job}</td>
                                </tr>
                                <tr>
                                    <td>Position</td>
                                    <td>{user.position}</td>
                                </tr>
                                <tr>
                                    <td>Company</td>
                                    <td>{user.company}</td>
                                </tr>
                                <tr>
                                    <td>Working address</td>
                                    <td>{user.workingAddress}</td>
                                </tr>
                            </tbody>
                        </table>
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
