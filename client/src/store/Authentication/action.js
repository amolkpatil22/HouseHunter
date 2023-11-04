import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REGISTER_SUCCESS, LOGIN_REQ, LOGIN_SUCCESS_ADMIN, LOGIN_SUCCESS_USER, LOG_OUT, URL } from "./actionTypes"

export const adminLogin=(admin)=>(dispatch)=>{
     dispatch({type:LOGIN_REQ})
    // return(
    //     axios.get(`https://electronix-express-api.onrender.com/admin`).then((res)=>{
    //          let data=res.data;
    //         //  console.log(data)
    //         let login= data.find((el)=>el.email===admin.email&&el.password===admin.password);
    //         console.log(login)
    //         if(login!==undefined){
    //             dispatch({type:LOGIN_SUCCESS_ADMIN,payload:admin.name})
    //             return login
    //             // alert("admin login successful")
    //         }
    //     }).catch((error)=>{
    //         dispatch({type:LOGIN_FAILURE})
    //     })
    // )
}

export const userLogin=(user)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ})
    return(
        axios.post(`${URL}/user/login`,user).then((res)=>{
            console.log(res.data)
            console.log(res.data.token)
            console.log(res.data.name)
               dispatch({type:LOGIN_SUCCESS_USER,payload:res.data.token})
         
       }).catch((error)=>{
           dispatch({type:LOGIN_FAILURE})
           throw error;
       })
    )
}

export const userRegister=(newUser)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ})
    return(
        axios.post(`${URL}/user/register`,newUser).then((res)=>{
            dispatch({type:LOGIN_REGISTER_SUCCESS})
        }).catch((error)=>{
            console.log(error.message)
            dispatch({type:LOGIN_FAILURE})
        })
    )
}

export const logoutAction=(token)=>(dispatch)=>{
    return(
        axios.get(`${URL}/user/logout`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
        dispatch({type:LOG_OUT})
        console.log("Logout Successful")
       
    }).catch((error)=>{
        console.log(error.message)
        
    })
)
}