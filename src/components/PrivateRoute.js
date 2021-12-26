import { Navigate } from "react-router-dom";
import { getIsAuth } from '../redux/user/userSelector'
import { useSelector } from "react-redux";


export const PrivateRoute = (props) => {
    const isAuth = useSelector(getIsAuth);

    return isAuth ? props.children : <Navigate to='/'/>
}