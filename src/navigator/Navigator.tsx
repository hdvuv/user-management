import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../features/authorization/login/LoginPage';
import ListUser from '../features/user/list/ListPage';
import DetailUser from '../features/user/detail/DetailPage';
import CreateUser1 from '../features/user/create/CreatePage1';
import CreateUser2 from '../features/user/create/CreatePage2';
import ConfirmUser from '../features/user/confirm/ConfirmPage';
import EditUser from '../features/user/edit/EditPage';

export function Navigator() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="list" element={<ListUser />} />
                <Route path="detail" element={<DetailUser />} />
                <Route path="create1" element={<CreateUser1 />} />
                <Route path="create2" element={<CreateUser2 />} />
                <Route path="confirm" element={<ConfirmUser />} />
                <Route path="edit" element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    )
}
