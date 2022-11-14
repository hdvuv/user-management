import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { DetailContent } from './DetailStyled';
import { useGetUserQuery } from "../../../services/user/userApi";
import { ACCESS_TOKEN_KEY, LOGGED_STATUS, PARAMS, PATH } from '../../../constants/Common';
import { useEffect } from 'react';
import { strings } from '../../../localization/Localization';

const DetailUser = () => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get(PARAMS.ID);
    const { data, error, isLoading } = useGetUserQuery(id ? id : PARAMS.ID_RANDOM);

    useEffect(() => {
        if (sessionStorage.getItem(ACCESS_TOKEN_KEY) !== LOGGED_STATUS) {
            navigate(PATH.HOME, { replace: true });
        };
    }, []);

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>{strings.detail.detail_title}</p>
                    </PageTittle>
                    {error ? (
                        <> {strings.common.error_loading_msg} </>
                    ) : isLoading ? (
                        <> {strings.common.loading_msg}</>
                    ) : data ? (
                        <>
                            <DetailContent>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>{strings.detail.name}</td>
                                            <td>{data?.name}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.sex}</td>
                                            <td>{data?.sex}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.phone}</td>
                                            <td>{data?.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.email}</td>
                                            <td>{data?.email}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.address}</td>
                                            <td>{data?.address}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.job}</td>
                                            <td>{data?.job}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.position}</td>
                                            <td>{data?.position}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.company}</td>
                                            <td>{data?.company}</td>
                                        </tr>
                                        <tr>
                                            <td>{strings.detail.working_address}</td>
                                            <td>{data?.workingAddress}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DetailContent>
                            <ButtonDiv>
                                <button onClick={() => navigate(PATH.LIST)}>{strings.detail.back_btn}</button>
                            </ButtonDiv>
                        </>
                    ) : null}
                </Wrapper>
            </Container>
        </>
    );
}

export default DetailUser;
