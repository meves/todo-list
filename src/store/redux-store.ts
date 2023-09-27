import { combineReducers, createStore } from "redux";
import projectReducer from "./reducers/project-reducer";
import modalReducer from "./reducers/modal-reducer";

const rootReducer = combineReducers({
    projectsPage: projectReducer,
    modals: modalReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducer, composeEnhancers());

export default store