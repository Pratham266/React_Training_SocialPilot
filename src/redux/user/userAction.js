import { LOGIN_USER, LOGOUT_USER } from "./userTypes"

export const loginUser=(email,password)=>{
    console.log("yes in user login ",email,password);
    return{
        type:LOGIN_USER,
        payload:{email,password},
    }
}

export const logoutUser = ()=>{
    return{
        type:LOGOUT_USER,
    }
}