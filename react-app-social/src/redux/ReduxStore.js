import {combineReducers, createStore} from "redux";
import messageReducer from "./MessageReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;