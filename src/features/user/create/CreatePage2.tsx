import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { useAppDispatch } from '../../../redux/store/store';
import { create2 } from '../../../services/user/userSlice';
import { ICreateInput2 } from './CreateFunctions';
import { EMPTY, PATH } from '../../../constants/Common';

const CreateUser2 = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit
    } = useForm<ICreateInput2>({
        defaultValues: {
            job: EMPTY,
            position: EMPTY,
            company: EMPTY,
            workingAddress: EMPTY,
        }
    });

    const handleBack = () => {
        navigate(PATH.CREATE1, { replace: true });
    }

    const submit = (data: ICreateInput2) => {
        dispatch(create2(data));
        navigate(PATH.CONFIRM, { replace: true });
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>Create user (2) page</p>
                    </PageTittle>
                    <CreateContent>
                        <form
                            onSubmit={handleSubmit(submit)}
                        >
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Job</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("job")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Position</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("position")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Company</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("company")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Working address</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("workingAddress")}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <ButtonDiv>
                                <button onClick={handleBack}>Back</button>
                                <input type="submit" value='Next' />
                            </ButtonDiv>
                        </form>
                    </CreateContent>
                </Wrapper>
            </Container>
        </>
    );
}

export default CreateUser2;
