import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Authentication/authReducer";
import { profileReducer } from "../pages/ProfilePage/ProfileReducer";


const rootReducer = combineReducers({
    authReducer,
    profileReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))