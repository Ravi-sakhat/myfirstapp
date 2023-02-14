import { GET_JOB, GET_JOB_ERROR, GET_JOB_LOADING } from "../type";


const initialState = {
    getJobLoading: false,
    getJob: [],
    getJobError: [],
}

export const getJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOB_LOADING:
            return {
                ...state,
                getJobLoading: action.payload,
            };
        case GET_JOB:
            return {
                ...state,
                getJob: action.payload,
            };
        case GET_JOB_ERROR:
            return {
                ...state,
                getJobError: action.payload,
            };
        default:
            return state
    }
}