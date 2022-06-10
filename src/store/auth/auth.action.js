import axios from "axios";
import {
    LOGIN_LOADING,
    LOGIN_SUCESS,
    LOGIN_ERROR,
    LOGOUT,
    

}from "./auth.type"


export const loginAPI= (data) => (dispatch) => {
dispatch({type: LOGIN_LOADING})

axios.post("https://reqres.in/api/login",data)
.then((r) =>{
    dispatch({type: LOGIN_SUCESS,payload: r.data});
}).catch(() => {
    dispatch({type: LOGIN_ERROR});
})


};

export const logoutAPI=()=> ({type: LOGOUT});