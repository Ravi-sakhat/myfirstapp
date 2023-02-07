import axios from "axios"
import { GET_CAROUSEL, GET_CAROUSEL_ERROR, GET_CAROUSEL_LOADING, IS_LOADING } from "../type"

export const getCarousel = () => async (dispatch) => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        dispatch({
            type: GET_CAROUSEL_LOADING,
            payload: true
        })
        await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log('res', res)
                dispatch({
                    type: GET_CAROUSEL,
                    payload: res
                })
            }).catch((error) => {
                console.log(error);
            })
        dispatch({
            type: GET_CAROUSEL_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })

    } catch (error) {
        dispatch({
            type: GET_CAROUSEL_ERROR,
            paylaod: err
        })
        dispatch({
            type: GET_CAROUSEL_LOADING,
            payload: false
        })
        dispatch({
            type: IS_LOADING,
            payload: false
        })
    }
}