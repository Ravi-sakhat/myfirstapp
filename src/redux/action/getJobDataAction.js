import axios from "axios";
import { GET_JOB_LOADING , GET_JOB, IS_LOADING, GET_JOB_ERROR } from "../type";


export const getJobDataAction = () => async (dispatch) => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        dispatch({
            type: GET_JOB_LOADING,
            payload: true
        })
        await axios.get("http://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                dispatch({
                    type: GET_JOB,
                    payload: res
                })
            }).catch((error) => {
                console.log(error);
            })
        dispatch({
            type: GET_JOB_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })

    }
    catch (err) {
        dispatch({
            type: GET_JOB_ERROR,
            payload: err
        })

        dispatch({
            type: GET_JOB_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })
    }
}