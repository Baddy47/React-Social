const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newTextMessage
            };
            //возврат копии state для рендера элемента при изменении
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newTextMessage: action.newMessage
            };
        default:
            return state;
    }
};

export const addMessageAction = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextAction = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default messageReducer;