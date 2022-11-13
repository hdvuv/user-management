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

export function Navigator() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="list" element={<ListUser />} />
                <Route path="detail" element={<DetailUser />} />
                <Route path="create1" element={<CreateUser1 />} />
                <Route path="create2" element={<CreateUser2 />} />
                <Route path="confirm" element={<ConfirmUser />} />
                <Route path="edit" element={<EditUser />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
