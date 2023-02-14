// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { carouselReducer } from "./reducer/carouselReducer";
import { getSkillReducer } from './reducer/getSkillReducer';
import { getJobReducer } from './reducer/getJobReducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  carouselData: carouselReducer,
  getSkillData: getSkillReducer,
  getJobData: getJobReducer

})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;