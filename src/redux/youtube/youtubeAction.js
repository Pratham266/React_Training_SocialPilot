import axios from "axios"
import {FETCH_YOUTUBE_FAILURE, FETCH_YOUTUBE_REQUEST, FETCH_YOUTUBE_SUCCESS } from "./youtubeTypes"

export const fetchYoutubeRequest=()=>{
    return{
        type:FETCH_YOUTUBE_REQUEST
    }
}

export const fetchYoutubeSuccess=(users)=>{
    return{
        type:FETCH_YOUTUBE_SUCCESS,
        payload:users
    }
}

export const fetchYoutubeFailure=(error)=>{
    return{
        type:FETCH_YOUTUBE_FAILURE,
        payload:error
    }
}


export const fetchYoutube = ()=>{
    return (dispatch)=>{
        dispatch(fetchYoutubeRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            const youtubeData = res.data
            dispatch(fetchYoutubeSuccess(youtubeData))

        }).catch(err=>{
            const errMessage = err.message
            dispatch(fetchYoutubeFailure(errMessage))
        })
    }
}