import {combineReducers, createStore} from "redux";
import messageReducer from "./MessageReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./UsersReducer";
import authorizationReducer from "./authorizationReducer";

let rootReducers = combineReducers({
    message: messageReducer,
    profile: profileReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    authorization: authorizationReducer
});

let store = createStore(rootReducers);
window.store = store;
export default store;