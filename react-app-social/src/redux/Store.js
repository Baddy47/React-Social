import messageReducer from "./MessageReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _callSubscriber() {},
    _state: {
        messagePage: {
            userData: [
                {id: 1, name: 'Simona'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Mila'},
                {id: 4, name: 'Billy'}
            ],
            messageData: [
                {id: 1, message: 'Hi, what you name?'},
                {id: 2, message: 'My name is Anna'}
            ],
            newTextMessage: ''
        },
        profilePage: {
            postData: [
                {id: 1, name: 'Simona', message: 'This my car.', likeCounts: 55},
                {id: 2, name: 'Billy', message: 'I found a new job.', likeCounts: 24},
            ],
            newTextData: ''
        },
        sideBar: {}
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
};

export default store;