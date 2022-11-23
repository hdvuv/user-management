import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useGetUserQuery, useUpdateUserMutation } from '../../../services/user/userApi';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { EditContent } from './EditStyled';
import { EMPTY, PARAMS, PATH, QUESTION_MARK } from "../../../constants/Common";
import { strings } from '../../../localization/Localization';
import useAuth from "../../../shared/hooks/useAuth";

const EditUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentUserId = location.search ? location.search.replace(QUESTION_MARK, EMPTY) : PARAMS.ID_RANDOM;
    const { data, error, isLoading } = useGetUserQuery(currentUserId);
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
        navigate(PATH.LIST, { replace: true });
    }

    useAuth();

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
        navigate(PATH.LIST, { replace: true });
    }, [updateUserResult.isSuccess]);

    if (updateUserResult.isLoading) return (<> {strings.common.loading_msg}</>);
    if (updateUserResult.isError) return (<> {strings.common.error_loading_msg}</>);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }

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
                        <> {strings.common.loading_msg}</>
                    ) : data ? (
                        <>
                            <EditContent>
                                <form onSubmit={handleSubmit(submit)}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>{strings.detail.name}</td>
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
                                                <td>{strings.detail.sex}</td>
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
                                                <td>{strings.detail.phone}</td>
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
                                                <td>{strings.detail.email}</td>
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
                                                <td>{strings.detail.address}</td>
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
                                                <td>{strings.detail.job}</td>
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
                                                <td>{strings.detail.position}</td>
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
                                                <td>{strings.detail.company}</td>
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
                                                <td>{strings.detail.working_address}</td>
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
}

export default EditUser;
