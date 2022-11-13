import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store/store';
import { create1 } from '../../../services/user/userSlice';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { CreateContent } from './CreateStyled';
import { ICreateInput1 } from './CreateFunctions';


const CreateUser1 = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit
    } = useForm<ICreateInput1>({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            sex: '',
        }
    });


    const handleBack = () => {
        navigate('/list', { replace: true });
    }

    const submit = (data: ICreateInput1) => {
        dispatch(create1(data));
        navigate('/create2', { replace: true });
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>Create user (1) page</p>
                    </PageTittle>
                    <CreateContent>
                        <form
                            onSubmit={handleSubmit(submit)}
                        >
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("name")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("phone")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("email")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>
                                            <input
                                                type='text'
                                                {...register("address")}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Sex</th>
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

export default CreateUser1;
