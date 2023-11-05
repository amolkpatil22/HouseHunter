import { Route, Routes } from "react-router-dom"
import SignUp from "../pages/Login/SignUp"
import Login from "../pages/Login/Login"
import HomePage from "../pages/homePage/HomePage"
import BuyHouse from "../pages/BuyHouse/BuyHouse"
import RentHouse from "../pages/RentHouse/RentHouse"
import SellHouse from "../pages/SellHouse/SellHouse"
import { ProfilePage } from "../pages/ProfilePage/ProfilePage"

import Admin from "../pages/Login/Admin"

import Checkout from "./Checkout"
import PropertyCard from "./PropertyCard"



export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buyhouse" element={<BuyHouse />} />
            <Route path="/renthouse" element={<RentHouse />} />
            <Route path="/sellhouse" element={<SellHouse />} />
            <Route path={"/register"} element={<SignUp />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/adminlogin"} element={<Admin />} />

            <Route path={"/property"} element={<PropertyCard />} />

            {/* <Route path={"/property"} element={<PropertiesPage />} /> */}

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/checkout/:id" element={<Checkout/>}/>
        </Routes>
    )
}