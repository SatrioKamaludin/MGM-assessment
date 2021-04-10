// CUSTOM HOOK TO FETCH THE DATA

import { useCallback, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    data: "",
    error: "",
    loading: false
}

const axiosReducer = (state, action) => {
    switch (action.type) {
        case "START":
            return { data: "", error:"", loading: true }

        case "SUCCESS":
            return { data: action.value, error:"", loading: false }

        case "ERROR":
            return { data: "", error: action.value, loading: false }

        default:
            break;
    }
}

const useFetch = () => {
    const [reducerState, dispatch]= useReducer(axiosReducer, initialState);

    const AxiosCall = useCallback((urls) => {
        
        dispatch({type : "START"});

        const axiosArr = urls.map((el,index)=>{
            return axios.get(el);
        })
        Promise.all(axiosArr).then((res)=>{
            dispatch({type : "SUCCESS", value : res});  
        }).catch((e)=>{
            dispatch({type : "ERROR", value : e});  
        })

    },[])

    return [reducerState,AxiosCall];
}

export default useFetch;