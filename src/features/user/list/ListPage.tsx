import { createSearchParams, useNavigate } from 'react-router-dom';
import { ListContent } from './ListStyled';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { useGetUsersQuery } from "../../../services/user/userApi"

const ListUser = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetUsersQuery();

    const handleCreateClick = () => {
        navigate('/create1', { replace: true });
    }

    const handleDetailClick = (event: any) => {
        const param = { id: event.currentTarget.id };
        navigate({
            pathname: '/detail',
            search: `?${createSearchParams(param)}`,
        });
    }

    const handleEditClick = (event: any) => {
        const param = { id: event.currentTarget.id };
        navigate({
            pathname: '/edit',
            search: `?${createSearchParams(param)}`,
        });
    }

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
                    ) : data ? (
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
                                                    <td>{user?.id}</td>
                                                    <td>
                                                        <a id={user?.id} href='' onClick={event => handleDetailClick(event)}>{user?.name}
                                                        </a>
                                                    </td>
                                                    <td>{user?.email}</td>
                                                    <td>{user?.phone}</td>
                                                    <td>{user?.address}</td>
                                                    <td>
                                                        <a id={user?.id}  href='' onClick={event => handleEditClick(event)}>Edit
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
                    ) : null}
                </Wrapper>
            </Container>
        </>
    );
}

export default ListUser;