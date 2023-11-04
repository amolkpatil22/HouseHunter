import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Authentication/authReducer";


const rootReducer = combineReducers({
    authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))