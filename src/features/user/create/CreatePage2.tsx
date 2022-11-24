import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { useAppDispatch, useTypedSelector } from '../../../redux/store/store';
import { create2, userSelector } from '../../../services/user/userSlice';
import { ICreateInput2 } from './CreateFunctions';
import { EMPTY, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import useAuth from '../../../shared/hooks/useAuth';
import { useEffect } from 'react';

const CreateUser2 = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useTypedSelector(userSelector);

  const { register, handleSubmit, reset } = useForm<ICreateInput2>({
    defaultValues: {
      job: EMPTY,
      position: EMPTY,
      company: EMPTY,
      workingAddress: EMPTY,
    },
  });

  useEffect(() => {
    reset({
      job: selector.user.job,
      position: selector.user.position,
      company: selector.user.company,
      workingAddress: selector.user.workingAddress,
    });
  }, []);

  const handleBack = () => {
    navigate(PATH.CREATE1, { replace: true });
  };

  const submit = (data: ICreateInput2) => {
    dispatch(create2(data));
    navigate(PATH.CONFIRM, { replace: true });
  };

  useAuth();

  return (
    <>
      <Container>
        <Wrapper>
          <PageTittle>
            <p>{strings.create.create2_title}</p>
          </PageTittle>
          <CreateContent>
            <form onSubmit={handleSubmit(submit)}>
              <table>
                <tbody>
                  <tr>
                    <th>{strings.create.job}</th>
                    <td>
                      <input type="text" {...register('job')} />
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.position}</th>
                    <td>
                      <input type="text" {...register('position')} />
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.company}</th>
                    <td>
                      <input type="text" {...register('company')} />
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.working_address}</th>
                    <td>
                      <input type="text" {...register('workingAddress')} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <ButtonDiv>
                <button onClick={handleBack}>{strings.create.back_btn}</button>
                <input type="submit" value={strings.create.next_btn} />
              </ButtonDiv>
            </form>
          </CreateContent>
        </Wrapper>
      </Container>
    </>
  );
};

export default CreateUser2;
