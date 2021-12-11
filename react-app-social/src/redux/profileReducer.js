const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, name: 'Simona', message: 'This my car.', likeCounts: 55},
        {id: 2, name: 'Billy', message: 'I found a new job.', likeCounts: 24},
    ],
    newTextData: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: 'Mark',
                message: state.newTextData,
                likeCounts: 0
            };
            //возврат копии state для рендера элемента при изменении
            return {
                ...state,
                postData: [...state.postData, newPost] //вместо push, используя спредОператор. 1ое копия 2ое новый обьект
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newTextData: action.newText
            };
        default:
            return state;
    }
};

export const addPostAction = () => ({type: ADD_POST});
export const updateNewPostTextAction = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;