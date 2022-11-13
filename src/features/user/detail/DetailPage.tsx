import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { DetailContent } from './DetailStyled';
import { useGetUserQuery } from "../../../services/user/userApi"
import { PATH } from '../../../constants/Common';

const DetailUser = () => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const { data, error, isLoading } = useGetUserQuery(id ? id : "1");

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p >Detail user page</p>
                    </PageTittle>
                    {error ? (
                        <> Oh no, there was an error </>
                    ) : isLoading ? (
                        <> Loading...</>
                    ) : data ? (
                        <>
                            <DetailContent>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{data?.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Sex</td>
                                            <td>{data?.sex}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{data?.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{data?.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{data?.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Job</td>
                                            <td>{data?.job}</td>
                                        </tr>
                                        <tr>
                                            <td>Position</td>
                                            <td>{data?.position}</td>
                                        </tr>
                                        <tr>
                                            <td>Company</td>
                                            <td>{data?.company}</td>
                                        </tr>
                                        <tr>
                                            <td>Working address</td>
                                            <td>{data?.workingAddress}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DetailContent>
                            <ButtonDiv>
                                <button onClick={() => navigate(PATH.LIST)}>Back</button>
                            </ButtonDiv>
                        </>
                    ) : null}
                </Wrapper>
            </Container>
        </>
    );
}

export default DetailUser;
