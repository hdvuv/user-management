import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { useAppDispatch } from '../../../redux/store/store';
import { create2 } from '../../../services/user/userSlice';
import { ICreateInput2 } from './CreateFunctions';
import { ACCESS_TOKEN_KEY, EMPTY, LOGGED_STATUS, PATH } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';

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

    useEffect(() => {
        if (sessionStorage.getItem(ACCESS_TOKEN_KEY) !== LOGGED_STATUS) {
            navigate(PATH.HOME, { replace: true });
        };
    }, []);

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>{strings.create.create2_title}</p>
                    </PageTittle>
                    <CreateContent>
                        <form
                            onSubmit={handleSubmit(submit)}
                        >
                            <table>
                                <tbody>
                                    <tr>
                                        <th>{strings.create.job}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("job")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.position}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("position")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.company}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("company")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.working_address}</th>
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
                                <button onClick={handleBack}>{strings.create.back_btn}</button>
                                <input type="submit" value={strings.create.next_btn} />
                            </ButtonDiv>
                        </form>
                    </CreateContent>
                </Wrapper>
            </Container>
        </>
    );
}

export default CreateUser2;
