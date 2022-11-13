import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useGetUserQuery, useUpdateUserMutation } from '../../../services/user/userApi';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { EditContent } from './EditStyled';


const EditUser = () => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const currentUserId = new URLSearchParams(search).get('id');
    const { data, error, isLoading } = useGetUserQuery(currentUserId ? currentUserId : "1");
    const [updateUser, updateUserResult] = useUpdateUserMutation();

    const [selectedUser, setSelectedUser] = useState({
        id: currentUserId,
        name: data?.name,
        phone: data?.phone,
        email: data?.email,
        address: data?.address,
        sex: data?.sex,
        job: data?.job,
        position: data?.position,
        company: data?.company,
        workingAddress: data?.workingAddress,
    })

    const { handleSubmit, } = useForm();

    const handleBack = () => {
        navigate('/list', { replace: true });
    }

    useEffect(() => {
        setSelectedUser({
            id: currentUserId,
            name: data?.name,
            phone: data?.phone,
            email: data?.email,
            address: data?.address,
            sex: data?.sex,
            job: data?.job,
            position: data?.position,
            company: data?.company,
            workingAddress: data?.workingAddress,
        });
    }, [isLoading])

    const submit = async () => {
        updateUser({
            id: String(selectedUser?.id),
            name: selectedUser?.name,
            sex: selectedUser?.sex,
            phone: selectedUser?.phone,
            email: selectedUser?.email,
            address: selectedUser?.address,
            job: selectedUser?.job,
            company: selectedUser?.company,
            position: selectedUser?.position,
            workingAddress: selectedUser?.workingAddress
        });
    }

    useEffect(() => {
        if (updateUserResult.isUninitialized) return;
        navigate('/list', { replace: true });
    }, [updateUserResult.isSuccess]);

    if (updateUserResult.isLoading) return (<> Loading...</>);
    if (updateUserResult.isError) return (<> Oh no, there was an error</>);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>Edit user page</p>
                    </PageTittle>
                    {error ? (
                        <> Oh no, there was an error </>
                    ) : isLoading ? (
                        <> Loading...</>
                    ) : data ? (
                        <>
                            <EditContent>
                                <form onSubmit={handleSubmit(submit)}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='name'
                                                        value={selectedUser.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sex</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='sex'
                                                        value={selectedUser.sex}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Phone</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='phone'
                                                        value={selectedUser.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='email'
                                                        value={selectedUser.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Address</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='address'
                                                        value={selectedUser.address}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Job</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='job'
                                                        value={selectedUser.job}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Position</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='position'
                                                        value={selectedUser.position}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Company</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='company'
                                                        value={selectedUser.company}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Working address</td>
                                                <td>
                                                    <input
                                                        type='text'
                                                        name='workingAddress'
                                                        value={selectedUser.workingAddress}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <ButtonDiv>
                                        <button onClick={handleBack}>Back</button>
                                        <input type="submit" value='Update' />
                                    </ButtonDiv>
                                </form>
                            </EditContent>
                        </>
                    ) : null}
                </Wrapper>
            </Container>
        </>
    );
}

export default EditUser;
