import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REGISTER_SUCCESS, LOGIN_REQ, LOGIN_SUCCESS_ADMIN, LOGIN_SUCCESS_USER, LOG_OUT } from "./actionTypes"

export const adminLogin=(admin)=>(dispatch)=>{
     dispatch({type:LOGIN_REQ})
    return(
        axios.get(`https://electronix-express-api.onrender.com/admin`).then((res)=>{
             let data=res.data;
            //  console.log(data)
            let login= data.find((el)=>el.email===admin.email&&el.password===admin.password);
            console.log(login)
            if(login!==undefined){
                dispatch({type:LOGIN_SUCCESS_ADMIN,payload:admin.name})
                return login
                // alert("admin login successful")
            }
        }).catch((error)=>{
            dispatch({type:LOGIN_FAILURE})
        })
    )
}

export const userLogin=(user)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ})
    return(
        axios.get(`https://electronix-express-api.onrender.com/users`).then((res)=>{
            let data=res.data;
           //  console.log(data)
           let login= data.find((el)=>el.email===user.email&&el.password===user.password);
           console.log(login)
           if(login!==undefined){
               dispatch({type:LOGIN_SUCCESS_USER,payload:login.name})
            //    alert("login Successful")
               return login
           }
       }).catch((error)=>{
           dispatch({type:LOGIN_FAILURE})
       })
    )
}

export const userRegister=(newUser)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ})
    return(
        axios.post("https://electronix-express-api.onrender.com/users",newUser).then((res)=>{
            dispatch({type:LOGIN_REGISTER_SUCCESS})
            // alert("registar successfull")
        }).catch((error)=>{
            dispatch({type:LOGIN_FAILURE})
        })
    )
}

export const logoutAction=()=>(dispatch)=>{
   return  dispatch({type:LOG_OUT})
}