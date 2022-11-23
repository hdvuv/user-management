import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store/store';
import { create1 } from '../../../services/user/userSlice';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { ICreateInput1 } from './CreateFunctions';
import {  EMPTY, PATH } from "../../../constants/Common";
import { strings } from '../../../localization/Localization';
import useAuth from "../../../shared/hooks/useAuth";
import { Input } from "@mui/material";

const CreateUser1 = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        control,
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

    useAuth();    

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
                                            <Controller
                                            render={({ field }) => <Input {...field} />}
                                            name="name"
                                            control={control}
                                          />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.sex}</th>
                                        <td>
                                            <Controller
                                            render={({ field }) => <Input {...field} />}
                                            name="sex"
                                            control={control}
                                          />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.phone}</th>
                                        <td>
                                            <Controller
                                            render={({ field }) => <Input {...field} />}
                                            name="phone"
                                            control={control}
                                          />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.email}</th>
                                        <td>
                                            <Controller
                                            render={({ field }) => <Input {...field} />}
                                            name="email"
                                            control={control}
                                          />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{strings.create.address}</th>
                                        <td>
                                            <Controller
                                            render={({ field }) => <Input {...field} />}
                                            name="address"
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
}

export default CreateUser1;
