import { Route, Routes } from "react-router-dom"
import SignUp from "../pages/Login/SignUp"
import Login from "../pages/Login/Login"
import HomePage from "../pages/homePage/HomePage"
import BuyHouse from "../pages/BuyHouse/BuyHouse"
import RentHouse from "../pages/RentHouse/RentHouse"
import SellHouse from "../pages/SellHouse/SellHouse"


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/buyhouse" element={<BuyHouse/>} />
            <Route path="/renthouse" element={<RentHouse/>} />
            <Route path="/sellhouse" element={<SellHouse/>} />
            <Route path={"/register"}  element={<SignUp />}/>
            <Route path={"/login"}  element={<Login />}/>
        </Routes>
    )
}