import { useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { ListContent } from './ListStyled';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { useGetUsersQuery, useDeleteUserMutation } from "../../../services/user/userApi";
import { ACCESS_TOKEN_KEY, LOGGED_STATUS, PATH } from '../../../constants/Common';

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

    if (deleteUserResult.isLoading) return (<> Loading...</>);
    if (deleteUserResult.isError) return (<> Oh no, there was an error</>);

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>List user page</p>
                    </PageTittle>
                    {error ? (
                        <> Oh no, there was an error </>
                    ) : isLoading ? (
                        <> Loading...</>
                    ) : data?.length ? (
                        <>
                            <ListContent>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Actions</th>
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
                                                        <a id={user?.id} href='' onClick={event => handleEditClick(event)}>Edit
                                                        </a>
                                                        <a id={user?.id} href='' onClick={event => handleDeleteClick(event)}>Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </ListContent>
                            <ButtonDiv>
                                <button onClick={handleCreateClick}>Create</button>
                            </ButtonDiv>
                        </>
                    ) : (
                        <>
                            <p>No users to display! Let create some record!!!</p>
                            <ButtonDiv>
                                <button onClick={handleCreateClick}>Create</button>
                            </ButtonDiv>
                        </>)}
                </Wrapper>
            </Container>
        </>
    );
}

export default ListUser;
