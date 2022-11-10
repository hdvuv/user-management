import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {ListContent } from './ListStyled';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';

const ListUser = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');
    const [data, setData] = useState();
    const userApi = 'http://localhost:3000/users';

    useEffect(() => {
        axios.get(userApi)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    /**
     * Handle redirect to Create page
     */
    const handleCreateClick = () => {
        navigate('/create1', { replace: true });
    }

    /**
     * Handle redirect to Detail page
     */
    const handleDetailClick = () => {
        navigate('/detail');
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <PageTittle>
                        <p>List user page</p>
                    </PageTittle>
                    <ListContent>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>
                                    <a className='' href='' onClick={handleDetailClick}>Nguyễn Văn A
                                    </a>
                                </td>
                                <td>
                                    a.nv@gmail.com
                                </td>
                                <td>
                                    0123456789
                                </td>
                                <td>
                                    Ha Noi
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    <a className='' href='' onClick={handleDetailClick}>Nguyễn Văn A
                                    </a>
                                </td>
                                <td>
                                    a.nv@gmail.com
                                </td>
                                <td>
                                    0123456789
                                </td>
                                <td>
                                    Ha Noi
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    <a className='' href='' onClick={handleDetailClick}>Nguyễn Văn A
                                    </a>
                                </td>
                                <td>
                                    a.nv@gmail.com
                                </td>
                                <td>
                                    0123456789
                                </td>
                                <td>
                                    Ha Noi
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    <a className='' href='' onClick={handleDetailClick}>Nguyễn Văn A
                                    </a>
                                </td>
                                <td>
                                    a.nv@gmail.com
                                </td>
                                <td>
                                    0123456789
                                </td>
                                <td>
                                    Ha Noi
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    <a className='' href='' onClick={handleDetailClick}>Nguyễn Văn A
                                    </a>
                                </td>
                                <td>
                                    a.nv@gmail.com
                                </td>
                                <td>
                                    0123456789
                                </td>
                                <td>
                                    Ha Noi
                                </td>
                            </tr>
                        </table>
                    </ListContent>
                    <ButtonDiv>
                        <button onClick={handleCreateClick}>Create</button>
                    </ButtonDiv>
                </Wrapper>
            </Container>
        </>
    );
}

export default ListUser;