import { FETCH_YOUTUBE_FAILURE, FETCH_YOUTUBE_REQUEST, FETCH_YOUTUBE_SUCCESS } from "./youtubeTypes"

const initialState={
    loading:true,
    data:[],
    error:``
}

const youtubeReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_YOUTUBE_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:``
            }

        case FETCH_YOUTUBE_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_YOUTUBE_FAILURE:
            return{
                loading:false,
                data:[],
                error:action.payload
            }    
        default: return state
    }
}

export default youtubeReducer;