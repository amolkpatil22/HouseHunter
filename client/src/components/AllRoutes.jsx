import { Route, Routes } from "react-router-dom"
import SignUp from "../pages/Login/SignUp"
import Login from "../pages/Login/Login"



export const AllRoutes = () => {
    return (
        <Routes>



            <Route path={"/register"}  element={<SignUp />}/>
            <Route path={"/login"}  element={<Login />}/>
        </Routes>
    )
}