const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let defaultState = {
    postData: [
        {id: 1, name: 'Simona', message: 'This my car.', likeCounts: 55},
        {id: 2, name: 'Billy', message: 'I found a new job.', likeCounts: 24},
    ],
    newTextData: '',
    profile: null
};

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: 'Mark',
                message: state.newTextData,
                likeCounts: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newTextData: action.payload
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        default:
            return state;
    }
};

export const addPostAction = () => ({type: ADD_POST});
export const updateNewPostTextAction = (text) => ({type: UPDATE_NEW_POST_TEXT, payload: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, payload: profile});

export default profileReducer;