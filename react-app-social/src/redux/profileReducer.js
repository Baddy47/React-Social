const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let defaultState = {
    postData: [],
    newTextData: '',
    profileData: null,
    profileStatus: ''
};

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: action.payload,
                photo: state.profileData.photos.small,
                name: state.profileData.fullName,
                message: state.newTextData,
                likeCounts: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            };
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter((post) => post.id !== action.payload)
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newTextData: action.payload
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profileData: action.payload
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                profileStatus: action.payload
            }
        }
        default:
            return state;
    }
};

export const addPost = (id) => ({type: ADD_POST, payload: id});
export const deletePost = (id) => ({type: DELETE_POST, payload: id});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, payload: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, payload: profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, payload: status});

export default profileReducer;