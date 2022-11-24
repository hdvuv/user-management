import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { useAppDispatch, useTypedSelector } from '../../../redux/store/store';
import { create2, userSelector } from '../../../services/user/userSlice';
import { ICreateInput2, validationSchema2 } from './CreateFunctions';
import { EMPTY, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import useAuth from '../../../shared/hooks/useAuth';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateUser2 = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useTypedSelector(userSelector);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateInput2>({
    resolver: yupResolver(validationSchema2),
    defaultValues: {
      job: EMPTY,
      position: EMPTY,
      company: EMPTY,
      workingAddress: EMPTY,
    },
  });

  useEffect(() => {
    reset({
      job: selector.user.job.trim(),
      position: selector.user.position.trim(),
      company: selector.user.company.trim(),
      workingAddress: selector.user.workingAddress.trim(),
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
                      {errors.job && <p>{errors.job.message}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.position}</th>
                    <td>
                      <input type="text" {...register('position')} />
                      {errors.position && <p>{errors.position.message}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.company}</th>
                    <td>
                      <input type="text" {...register('company')} />
                      {errors.company && <p>{errors.company.message}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.working_address}</th>
                    <td>
                      <input type="text" {...register('workingAddress')} />
                      {errors.workingAddress && <p>{errors.workingAddress.message}</p>}
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
