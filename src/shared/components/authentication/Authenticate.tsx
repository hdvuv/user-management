import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Authenticate = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const [logged] = useState(sessionStorage.getItem('access-token'));

    useEffect(() => {
        if (logged !== 'LOGGED') {
            navigate('/', { replace: true });
        }
    }, [pathname]);

    return <></>;
};

export default Authenticate;
