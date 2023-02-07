import { GET_CAROUSEL, GET_CAROUSEL_ERROR, GET_CAROUSEL_LOADING } from "../type";

const initialState = {
    getCarouselLoading: false,
    getCarousel: [],
    getCarouselError: "",
}

export const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAROUSEL_LOADING:
            return {
                ...state,
                getCarouselLoading: action.payload,
            };
            case GET_CAROUSEL:
            console.log("action", action)
            return {
                ...state,
                getCarousel: action.payload,
            };
        case GET_CAROUSEL_ERROR:
            return {
                ...state,
                getCarouselError: action.payload,
            };
        default:
            return state
    }
}