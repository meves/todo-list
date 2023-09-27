import { combineReducers, createStore } from "redux";
import projectReducer from "./reducers/project-reducer";
import modalReducer from "./reducers/modal-reducer";

const rootReducer = combineReducers({
    projectsPage: projectReducer,
    modals: modalReducer
})

const store = createStore(rootReducer);

export default store