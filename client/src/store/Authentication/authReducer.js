import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS_USER, LOG_OUT } from "./actionTypes";


const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    isAuthAdmin:false,
    token:JSON.parse(localStorage.getItem("token")) || "",
    username:JSON.parse(localStorage.getItem("username")) || ""
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQ:
            return { ...state, isLoading: true, isError: false };
        case LOGIN_SUCCESS_USER:
            return {
                ...state,

                isLoading:false,
                isError:false,
                isAuth:true,
                token:payload.token,
                username:payload.username
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case LOG_OUT:
            return {
                ...state,

                isAuth:false,
                token:"",
                username:""

            }
        default:
            return state;
    }
}