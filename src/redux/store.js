// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { carouselReducer } from "./reducer/carouselReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
    carouselData: carouselReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;