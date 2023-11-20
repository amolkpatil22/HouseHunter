import { Route, Routes } from "react-router-dom"
import SignUp from "../pages/Login/SignUp"
import Login from "../pages/Login/Login"
import HomePage from "../pages/homePage/HomePage"
import BuyHouse from "../pages/BuyHouse/BuyHouse"
import RentHouse from "../pages/RentHouse/RentHouse"
import SellHouse from "../pages/SellHouse/SellHouse"
import { ProfilePage } from "../pages/ProfilePage/ProfilePage"
import Admin from "../pages/Login/Admin"

import PropertyCard from "./PropertyCard"
import { PrivateRoute } from "./PrivateRoute"

import Checkout from "./Checkout"
import Checkout2 from "./Checkout2"
import PaymentPage from "./NewPayment"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buyhouse" element={<PrivateRoute><BuyHouse /></PrivateRoute>} />
            <Route path="/renthouse" element={<PrivateRoute><RentHouse /></PrivateRoute>} />
            <Route path="/sellhouse" element={<PrivateRoute><SellHouse /></PrivateRoute>} />
            <Route path={"/register"} element={<SignUp />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/adminlogin"} element={<Admin />} />

            <Route path={"/property"} element={<PropertyCard />} />

            {/* <Route path={"/checkout/:id/payment"} element={<Payment/>} />
            <Route path={"/checkout2/:id/payment"} element={<Payment/>} /> */}

            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/checkout/:id" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/checkout2/:id" element={<PrivateRoute><Checkout2 /></PrivateRoute>} />
            <Route path="/checkout/:id/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
        </Routes>
    )
}