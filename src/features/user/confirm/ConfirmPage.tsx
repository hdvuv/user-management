import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../redux/store/store';
import { useCreateUserMutation } from '../../../services/user/userApi';
import { reset, userSelector } from '../../../services/user/userSlice';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { ConfirmContent } from './ConfirmStyled';
import { PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import useAuth from '../../../shared/hooks/useAuth';

const ConfirmPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useTypedSelector(userSelector).user;
  const [createUser, createUserResult] = useCreateUserMutation();

  const handleBack1 = () => {
    navigate(PATH.CREATE1, { replace: true });
  };

  const handleBack2 = () => {
    navigate(PATH.CREATE2, { replace: true });
  };

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
      workingAddress: user.workingAddress,
    });
    dispatch(reset());
  };

  useAuth();

  useEffect(() => {
    if (createUserResult.isUninitialized) return;
    navigate(PATH.LIST, { replace: true });
  }, [createUserResult.isSuccess]);

  if (createUserResult.isLoading) return <> {strings.common.loading_msg}</>;
  if (createUserResult.isError) return <> {strings.common.error_loading_msg}</>;

  return (
    <>
      <Container>
        <Wrapper>
          <PageTittle>
            <p>{strings.confirm.confirm_title}</p>
          </PageTittle>
          <ConfirmContent>
            <table>
              <tbody>
                <tr>
                  <td>{strings.confirm.name}</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>{strings.confirm.sex}</td>
                  <td>{user.sex}</td>
                </tr>
                <tr>
                  <td>{strings.confirm.phone}</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td>{strings.confirm.email}</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>{strings.confirm.address}</td>
                  <td>{user.address}</td>
                </tr>
              </tbody>
            </table>
            <ButtonDiv>
              <button onClick={handleBack1}>{strings.confirm.back_btn}</button>
            </ButtonDiv>
          </ConfirmContent>
          <ConfirmContent>
            <table>
              <tbody>
                <tr>
                  <td>{strings.confirm.job}</td>
                  <td>{user.job}</td>
                </tr>
                <tr>
                  <td>{strings.confirm.position}</td>
                  <td>{user.position}</td>
                </tr>
                <tr>
                  <td>{strings.confirm.company}</td>
                  <td>{user.company}</td>
                </tr>
                <tr>
                  <td>{strings.confirm.working_address}</td>
                  <td>{user.workingAddress}</td>
                </tr>
              </tbody>
            </table>
            <ButtonDiv>
              <button onClick={handleBack2}>{strings.confirm.back_btn}</button>
            </ButtonDiv>
          </ConfirmContent>
          <ButtonDiv>
            <button onClick={handleNext}>{strings.confirm.next_btn}</button>
          </ButtonDiv>
        </Wrapper>
      </Container>
    </>
  );
};

export default ConfirmPage;
