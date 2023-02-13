import { GET_SKILL, GET_SKILL_ERROR, GET_SKILL_LOADING } from "../type";


const initialState = {
    getSkillLoading: false,
    getSkill: [],
    getSkillError: [],
}

export const getSkillReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SKILL_LOADING:
            return {
                ...state,
                getSkillLoading: action.payload,
            };
        case GET_SKILL:
            return {
                ...state,
                getSkill: action.payload,
            };
        case GET_SKILL_ERROR:
            return {
                ...state,
                getSkillError: action.payload,
            };
        default:
            return state
    }
}