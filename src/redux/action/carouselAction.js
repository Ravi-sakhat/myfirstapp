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
        await axios.get("http://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                console.log('res', res.data)
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

    }
    catch (err) {
        dispatch({
            type: GET_CAROUSEL_ERROR,
            payload: err
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