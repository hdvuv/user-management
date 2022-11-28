import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetUserQuery, useUpdateUserMutation } from '../../../services/user/userApi';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { EditContent } from './EditStyled';
import { EMPTY, PARAMS, PATH, QUESTION_MARK } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import useAuth from '../../../shared/hooks/useAuth';
import SkeletonCustomize from '../../skeleton/SkeletonCustomize';
import { IEditInput, validationSchema } from './EditFunction';
import { yupResolver } from '@hookform/resolvers/yup';

const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUserId = location.search
    ? location.search.replace(QUESTION_MARK, EMPTY)
    : PARAMS.ID_RANDOM;
  const { data, error, isLoading } = useGetUserQuery(currentUserId);
  const [updateUser, updateUserResult] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditInput>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: EMPTY,
      phone: EMPTY,
      email: EMPTY,
      address: EMPTY,
      sex: EMPTY,
      job: EMPTY,
      position: EMPTY,
      company: EMPTY,
      workingAddress: EMPTY,
    },
  });

  /**
   * Check logged in
   */
  useAuth();

  /**
   * Set form data
   */
  useEffect(() => {
    reset({
      name: data?.name.trim(),
      phone: data?.phone.trim(),
      email: data?.email.trim(),
      address: data?.address.trim(),
      sex: data?.sex.trim(),
      job: data?.job.trim(),
      position: data?.position.trim(),
      company: data?.company.trim(),
      workingAddress: data?.workingAddress.trim(),
    });
  }, [data]);

  /**
   * Handle back to List User screen
   */
  const handleBack = () => {
    navigate(PATH.LIST, { replace: true });
  };

  /**
   * Handle call API to edit user
   */
  const submit = async (data: IEditInput) => {
    updateUser({
      id: currentUserId,
      ...data,
    });
  };

  /**
   * When edit user success, move to List User Screen
   */
  useEffect(() => {
    if (updateUserResult.isUninitialized) return;
    navigate(PATH.LIST, { replace: true });
  }, [updateUserResult.isSuccess]);

  /**
   * When API Update User is loading, display skeleton
   */
  if (updateUserResult.isLoading) return <SkeletonCustomize />;

  /**
   * When API Update User is error, display error message
   */
  if (updateUserResult.isError) return <> {strings.common.error_loading_msg}</>;

  return (
    <>
      <Container>
        <Wrapper>
          <PageTittle>
            <p>{strings.edit.edit_title}</p>
          </PageTittle>
          {error ? (
            <> {strings.common.error_loading_msg} </>
          ) : isLoading ? (
            <SkeletonCustomize />
          ) : data ? (
            <>
              <EditContent>
                <form onSubmit={handleSubmit(submit)}>
                  <table>
                    <tbody>
                      <tr>
                        <td>{strings.detail.name}</td>
                        <td>
                          <input type="text" {...register('name')} />
                          {errors.name && <p>{errors.name.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.sex}</td>
                        <td>
                          <input type="text" {...register('sex')} />
                          {errors.sex && <p>{errors.sex.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.phone}</td>
                        <td>
                          <input type="text" {...register('phone')} />
                          {errors.phone && <p>{errors.phone.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.email}</td>
                        <td>
                          <input type="text" {...register('email')} />
                          {errors.email && <p>{errors.email.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.address}</td>
                        <td>
                          <input type="text" {...register('address')} />
                          {errors.address && <p>{errors.address.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.job}</td>
                        <td>
                          <input type="text" {...register('job')} />
                          {errors.job && <p>{errors.job.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.position}</td>
                        <td>
                          <input type="text" {...register('position')} />
                          {errors.position && <p>{errors.position.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.company}</td>
                        <td>
                          <input type="text" {...register('company')} />
                          {errors.company && <p>{errors.company.message}</p>}
                        </td>
                      </tr>
                      <tr>
                        <td>{strings.detail.working_address}</td>
                        <td>
                          <input type="text" {...register('workingAddress')} />
                          {errors.workingAddress && <p>{errors.workingAddress.message}</p>}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ButtonDiv>
                    <button onClick={handleBack}>{strings.edit.back_btn}</button>
                    <input type="submit" value={strings.edit.update_btn} />
                  </ButtonDiv>
                </form>
              </EditContent>
            </>
          ) : null}
        </Wrapper>
      </Container>
    </>
  );
};

export default EditUser;
