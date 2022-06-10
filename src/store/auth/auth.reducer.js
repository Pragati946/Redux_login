import {
    LOGIN_LOADING,
    LOGIN_SUCESS,
    LOGIN_ERROR,
    LOGOUT,
    

}from "./auth.type"

const initalState= {
    auth: {
        loading:false,
        error: false,
        isAuth: false,
        token : "",
    },
   
}

export const authReducer =(state=initalState, {type, payload}) => {


    switch(type) {

        
        case LOGIN_LOADING:{
            return {...state
            ,loading:true, error: false
            }
        }

        case LOGIN_SUCESS:{
            return {...state
                ,loading:true, error: false,isAuth: true
                ,token: payload.token
            }
        }
        case LOGIN_ERROR:{
            return {...state
                ,loading:true, error: false,isAuth:false
            }
        }
        case LOGOUT:
        {
            return {...state,isAuth: false}
        }


        default: {
            return state
        }
    }
}