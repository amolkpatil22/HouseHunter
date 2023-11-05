import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



export const PrivateRoute = ({ children }) => {
    const token = useSelector((store) => store.authReducer.token);

    if (token) {
        return children
    }
    else {
        return <Navigate to={"/login"}></Navigate>
    }

}