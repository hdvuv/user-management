import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContent } from './ListStyled';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { useGetUsersQuery, useDeleteUserMutation } from '../../../services/user/userApi';
import { PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../shared/hooks/useAuth';

const ListUser = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUsersQuery();
  const [deleteUser, deleteUserResult] = useDeleteUserMutation();

  useAuth();

  const handleCreateClick = () => {
    navigate(PATH.CREATE1, { replace: true });
  };

  const handleDetailClick = (id: string) => {
    navigate({
      pathname: PATH.DETAIL,
      search: `${id}`,
    });
  };

  const handleEditClick = (id: string) => {
    navigate({
      pathname: PATH.EDIT,
      search: `${id}`,
    });
  };

  const handleDeleteClick = (id: string) => {
    deleteUser(Number(id));
  };

  useEffect(() => {
    if (deleteUserResult.isUninitialized) return;
  }, [deleteUserResult.isSuccess]);

  if (deleteUserResult.isLoading) return <> {strings.common.loading_msg}</>;
  if (deleteUserResult.isError) return <> {strings.common.error_loading_msg}</>;

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
                            <a href="" onClick={() => handleDetailClick(user?.id)}>
                              {user?.name}
                            </a>
                          </td>
                          <td>{user?.email}</td>
                          <td>{user?.phone}</td>
                          <td>{user?.address}</td>
                          <td>
                            <a href="" onClick={() => handleEditClick(user?.id)}>
                              <FontAwesomeIcon icon={faPencil} title={strings.list.edit} />
                            </a>
                            <a href="" onClick={() => handleDeleteClick(user?.id)}>
                              <FontAwesomeIcon icon={faTrashCan} title={strings.list.delete} />
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
            </>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default ListUser;
