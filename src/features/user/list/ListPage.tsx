import { SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContent } from './ListStyled';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { useGetUsersQuery, useDeleteUserMutation } from '../../../services/user/userApi';
import { PAGINATION, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../shared/hooks/useAuth';
import Pagination from '../../pagination/Pagination';
import SkeletonCustomize from '../../skeleton/SkeletonCustomize';

const ListUser = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUsersQuery();
  const [deleteUser, deleteUserResult] = useDeleteUserMutation();
  // Current page
  const [currentPage, setCurrentPage] = useState(PAGINATION.CURRENT_PAGE);
  // Set number of record per page
  const [usersPerPage] = useState(PAGINATION.PER_PAGE);
  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data?.slice(indexOfFirstUser, indexOfLastUser);

  /**
   * Check logged in
   */
  useAuth();

  /**
   * Handle go to CREATE1 screen, can start enter information to create a new user
   */
  const handleCreateClick = () => {
    navigate(PATH.CREATE1, { replace: true });
  };

  /**
   * Handle go to DETAIL screen
   *
   * @param id id of user that want to view detail
   */
  const handleDetailClick = (id: string) => {
    navigate({
      pathname: PATH.DETAIL,
      search: `${id}`,
    });
  };

  /**
   * Handle go to EDIT screen, can start enter information to create a new user
   */
  const handleEditClick = (id: string) => {
    navigate({
      pathname: PATH.EDIT,
      search: `${id}`,
    });
  };

  /**
   * Handle to delete user record by id
   *
   * @param id id of user that want to delete
   */
  const handleDeleteClick = (id: string) => {
    deleteUser(Number(id));
  };

  /**
   * Handle paginate
   *
   * @param pageNumber selected page
   * @returns set current page when page is selected
   */
  const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

  /**
   * When API delete user success, move to List User screen
   */
  useEffect(() => {
    if (deleteUserResult.isUninitialized) return;
  }, [deleteUserResult.isSuccess]);

  /**
   * When API Delete User is loading, display skeleton
   */
  if (deleteUserResult.isLoading) return <SkeletonCustomize />;

  /**
   * When API Delete User is error, display error message
   */
  if (deleteUserResult.isError) return <> {strings.common.error_loading_msg}</>;

  /**
   * Display number of user record in system
   *
   * @returns line contain number of user record in system
   */
  const displayTotalUser = () => {
    return (
      <>
        <span>Total Users: {`${data?.length}`}</span>
      </>
    );
  };

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
            <SkeletonCustomize />
          ) : data?.length ? (
            <>
              <ListContent>
                {displayTotalUser()}
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
                    {currentUsers?.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + indexOfFirstUser + 1}</td>
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
              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={data?.length}
                paginate={paginate}
              />
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
