import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../redux/store/store';
import { create1, userSelector } from '../../../services/user/userSlice';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { ICreateInput1, validationSchema1 } from './CreateFunctions';
import { EMPTY, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import useAuth from '../../../shared/hooks/useAuth';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateUser1 = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useTypedSelector(userSelector);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateInput1>({
    resolver: yupResolver(validationSchema1),
    defaultValues: {
      name: EMPTY,
      phone: EMPTY,
      email: EMPTY,
      address: EMPTY,
      sex: EMPTY,
    },
  });

  useEffect(() => {
    reset({
      name: selector.user.name.trim(),
      phone: selector.user.phone.trim(),
      email: selector.user.email.trim(),
      address: selector.user.address.trim(),
      sex: selector.user.sex.trim(),
    });
  }, []);

  const handleBack = () => {
    navigate(PATH.LIST, { replace: true });
  };

  const submit = (data: ICreateInput1) => {
    dispatch(create1(data));
    navigate(PATH.CREATE2, { replace: true });
  };

  useAuth();

  return (
    <>
      <Container>
        <Wrapper>
          <PageTittle>
            <p>{strings.create.create1_title}</p>
          </PageTittle>
          <CreateContent>
            <form onSubmit={handleSubmit(submit)}>
              <table>
                <tbody>
                  <tr>
                    <th>{strings.create.name}</th>
                    <td>
                      <input type="text" {...register('name')} />
                      {errors.name && <p>{errors.name.message}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.sex}</th>
                    <td>
                      <input type="text" {...register('sex')} />
                      {errors.sex && <p>{errors.sex.message}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.phone}</th>
                    <td>
                      <input type="text" {...register('phone')} />
                      {errors.phone && <p>{errors.phone.message}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.email}</th>
                    <td>
                      <input type="text" {...register('email')} />
                      {errors.email && <p>{errors.email.message}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.address}</th>
                    <td>
                      <input type="text" {...register('address')} />
                      {errors.address && <p>{errors.address.message}</p>}
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

export default CreateUser1;
