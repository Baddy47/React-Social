import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReducer from "./MessageReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./UsersReducer";
import authorizationReducer from "./authorizationReducer";
import middleware from "redux-thunk";

let rootReducers = combineReducers({
    message: messageReducer,
    profile: profileReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    authorization: authorizationReducer
});

let store = createStore(rootReducers, applyMiddleware(middleware));
window.store = store;
export default store;