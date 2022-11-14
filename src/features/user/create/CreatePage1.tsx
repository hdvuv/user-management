import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store/store';
import { create1 } from '../../../services/user/userSlice';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { ICreateInput1 } from './CreateFunctions';
import { ACCESS_TOKEN_KEY, EMPTY, LOGGED_STATUS, PATH } from "../../../constants/Common";
import { strings } from '../../../localization/Localization';

const CreateUser1 = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit
    } = useForm<ICreateInput1>({
        defaultValues: {
            name: EMPTY,
            phone: EMPTY,
            email: EMPTY,
            address: EMPTY,
            sex: EMPTY,
        }
    });

    const handleBack = () => {
        navigate(PATH.LIST, { replace: true });
    }

    const submit = (data: ICreateInput1) => {
        dispatch(create1(data));
        navigate(PATH.CREATE2, { replace: true });
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
                        <p>{strings.create.create1_title}</p>
                    </PageTittle>
                    <CreateContent>
                        <form
                            onSubmit={handleSubmit(submit)}
                        >
                            <table>
                                <tbody>
                                    <tr>
                                        <th>{strings.create.name}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("name")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.phone}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("phone")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.email}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("email")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.address}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("address")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.sex}</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("sex")}
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

export default CreateUser1;
