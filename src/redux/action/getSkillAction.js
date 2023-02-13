import axios from "axios"
import { GET_SKILL, GET_SKILL_ERROR, GET_SKILL_LOADING, IS_LOADING } from "../type"

export const getSkillAction = () => async (dispatch) => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        dispatch({
            type: GET_SKILL_LOADING,
            payload: true
        })
        await axios.get("http://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                dispatch({
                    type: GET_SKILL,
                    payload: res
                })
            }).catch((error) => {
                console.log(error);
            })
        dispatch({
            type: GET_SKILL_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })

    }
    catch (err) {
        dispatch({
            type: GET_SKILL_ERROR,
            payload: err
        })

        dispatch({
            type: GET_SKILL_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })
    }
}