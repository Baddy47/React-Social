import { v4 as uuidv4 } from 'uuid';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let defaultState = {
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
};

const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: uuidv4(),
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

export const addMessage = () => ({type: ADD_MESSAGE});
export const updateMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: text});

export default messageReducer;