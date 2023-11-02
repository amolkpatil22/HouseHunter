import { Route, Routes } from "react-router-dom"
import SignUp from "../pages/Login/SignUp"
import Login from "../pages/Login/Login"
import HomePage from "../pages/homePage/HomePage"
import PropertiesPage from "../pages/PropertiesPage/PropertiesPage"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/register"}  element={<SignUp />}/>
            <Route path={"/login"}  element={<Login />}/>
            <Route path={"/property"} element={<PropertiesPage/>}/>
        </Routes>
    )
}