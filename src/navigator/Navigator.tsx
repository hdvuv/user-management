import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../features/authentication/login/LoginPage';
import ListUser from '../features/user/list/ListPage';
import DetailUser from '../features/user/detail/DetailPage';
import CreateUser1 from '../features/user/create/CreatePage1';
import CreateUser2 from '../features/user/create/CreatePage2';
import ConfirmUser from '../features/user/confirm/ConfirmPage';
import EditUser from '../features/user/edit/EditPage';
import Header from '../shared/components/header/Header';
import Footer from '../shared/components/footer/Footer';
import Logout from '../shared/components/logout/Logout';
import { PATH } from '../constants/Common';

export function Navigator() {
    return (
        <BrowserRouter>
            <Header />
            <Logout />
            <Routes>
                <Route path={PATH.HOME} element={<LoginPage />} />
                <Route path={PATH.LIST} element={<ListUser />} />
                <Route path={PATH.DETAIL} element={<DetailUser />} />
                <Route path={PATH.CREATE1} element={<CreateUser1 />} />
                <Route path={PATH.CREATE2} element={<CreateUser2 />} />
                <Route path={PATH.CONFIRM} element={<ConfirmUser />} />
                <Route path={PATH.EDIT} element={<EditUser />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
