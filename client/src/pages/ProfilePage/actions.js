import axios from "axios"
import { getRequest, getsuccess } from "./ProfileReducer"
import { useDispatch } from "react-redux"



export const GetUser = (token) => (dispatch) => {
    dispatch({ type: getRequest })
    axios({
        method: "GET",
        url: "https://house-hunter-45uw.onrender.com/user",
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((res) => { dispatch({ type: getsuccess, payload: res.data.user }) })
        .catch((err) => { console.log(err) })

}



