import { useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { ListContent } from './ListStyled';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { useGetUsersQuery, useDeleteUserMutation } from "../../../services/user/userApi";
import { ACCESS_TOKEN_KEY, LOGGED_STATUS, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';

const ListUser = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetUsersQuery();
    const [deleteUser, deleteUserResult] = useDeleteUserMutation();

    const handleCreateClick = () => {
        navigate(PATH.CREATE1, { replace: true });
    }

    const handleDetailClick = (event: any) => {
        const param = { id: event.currentTarget.id };
        navigate({
            pathname: PATH.DETAIL,
            search: `?${createSearchParams(param)}`,
        });
    }

    const handleEditClick = (event: any) => {
        const param = { id: event.currentTarget.id };
        navigate({
            pathname: PATH.EDIT,
            search: `?${createSearchParams(param)}`,
        });
    }

    const handleDeleteClick = (event: any) => {
        const param = { id: event.currentTarget.id };
        deleteUser(Number(param.id));
    }

    useEffect(() => {
        if (deleteUserResult.isUninitialized) return;
        navigate(PATH.LIST, { replace: true });
    }, [deleteUserResult.isSuccess]);

    useEffect(() => {
        if (sessionStorage.getItem(ACCESS_TOKEN_KEY) !== LOGGED_STATUS) {
            navigate(PATH.HOME, { replace: true });
        };
    }, []);

    if (deleteUserResult.isLoading) return (<> {strings.common.loading_msg}</>);
    if (deleteUserResult.isError) return (<> {strings.common.error_loading_msg}</>);

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>{strings.list.list_title}</p>
                    </PageTittle>
                    {error ? (
                        <> {strings.common.error_loading_msg} </>
                    ) : isLoading ? (
                        <> {strings.common.loading_msg}</>
                    ) : data?.length ? (
                        <>
                            <ListContent>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>{strings.list.no_}</th>
                                            <th>{strings.list.name}</th>
                                            <th>{strings.list.email}</th>
                                            <th>{strings.list.phone}</th>
                                            <th>{strings.list.address}</th>
                                            <th>{strings.list.actions}</th>
                                        </tr>
                                        {data?.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <a id={user?.id} href='' onClick={event => handleDetailClick(event)}>{user?.name}
                                                        </a>
                                                    </td>
                                                    <td>{user?.email}</td>
                                                    <td>{user?.phone}</td>
                                                    <td>{user?.address}</td>
                                                    <td>
                                                        <a id={user?.id} href='' onClick={event => handleEditClick(event)}>
                                                            {strings.list.edit_btn}
                                                        </a>
                                                        <a id={user?.id} href='' onClick={event => handleDeleteClick(event)}>
                                                            {strings.list.delete_btn}
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </ListContent>
                            <ButtonDiv>
                                <button onClick={handleCreateClick}>{strings.list.create_btn}</button>
                            </ButtonDiv>
                        </>
                    ) : (
                        <>
                            <p>{strings.list.no_record_msg}</p>
                            <ButtonDiv>
                                <button onClick={handleCreateClick}>{strings.list.create_btn}</button>
                            </ButtonDiv>
                        </>)}
                </Wrapper>
            </Container>
        </>
    );
}

export default ListUser;
