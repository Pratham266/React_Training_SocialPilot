import { LOGIN_USER, LOGOUT_USER } from "./userTypes"

const initialState={
    email:"",
    password:"",
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case LOGIN_USER:return{
            ...state,
            email:action.payload.email,
            password:action.payload.password,
        }
        case LOGOUT_USER:return{
            ...state,
            email:"",
            password:""
        }
        default: return state
    }
}

export default userReducer;