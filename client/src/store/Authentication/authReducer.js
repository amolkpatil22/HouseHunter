import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS_USER } from "./actionTypes";

const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    isAuthAdmin:false,
    name:""
};

export const authReducer=(state= initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQ:
            return {...state, isLoading:true, isError:false};
        case LOGIN_SUCCESS_USER:
            return {
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                name:payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}