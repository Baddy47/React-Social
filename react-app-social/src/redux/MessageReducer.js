import { v4 as uuidv4 } from 'uuid';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let defaultState = {
    userData: [],
    messageData: [],
    newTextMessage: ''
};

const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: uuidv4(),
                idChat: action.payload,
                message: state.newTextMessage
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newTextMessage: action.payload
            };
        default:
            return state;
    }
};

export const addMessage = (idChat) => ({type: ADD_MESSAGE, payload: idChat});
export const updateMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: text});

export default messageReducer;