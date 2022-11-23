import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { useAppDispatch } from '../../../redux/store/store';
import { create2 } from '../../../services/user/userSlice';
import { ICreateInput2 } from './CreateFunctions';
import { EMPTY, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import useAuth from '../../../shared/hooks/useAuth';
import { Input } from '@mui/material';

const CreateUser2 = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<ICreateInput2>({
    defaultValues: {
      job: EMPTY,
      position: EMPTY,
      company: EMPTY,
      workingAddress: EMPTY,
    },
  });

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
                      <Controller
                        render={({ field }) => <Input {...field} />}
                        name="job"
                        control={control}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.position}</th>
                    <td>
                      <Controller
                        render={({ field }) => <Input {...field} />}
                        name="position"
                        control={control}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.company}</th>
                    <td>
                      <Controller
                        render={({ field }) => <Input {...field} />}
                        name="company"
                        control={control}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>{strings.create.working_address}</th>
                    <td>
                      <Controller
                        render={({ field }) => <Input {...field} />}
                        name="workingAddress"
                        control={control}
                      />
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
