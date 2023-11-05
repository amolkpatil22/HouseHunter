import axios from "axios"
import { getRequest, getsuccess } from "./ProfileReducer"



export const GetUser = (token) => (dispatch) => {
    dispatch({ type: getRequest })
    axios({
        method: "GET",
        url: "https://househunter.up.railway.app/user",
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((res) => { dispatch({ type: getsuccess, payload: res.data.user }) })
        .catch((err) => { console.log(err) })

}