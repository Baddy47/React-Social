const SET_AUTHORIZATION_USER = 'SET_AUTHORIZATION_USER';
const CHANGE_RESULT_CODE = 'CHANGE_RESULT_CODE';

let defaultState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    resultCode: null,
    isFetching: false
};
const authorizationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION_USER:
            return {
                ...state,
                ...action.payload
            }
        case CHANGE_RESULT_CODE:
            return {
                ...state,
                resultCode: action.payload
            }
        default:
            return state;
    }
};

export const setAuthorizationUser = (data) => ({type: SET_AUTHORIZATION_USER, payload: data})
export const changeResultCode = (code) => ({type: CHANGE_RESULT_CODE, payload: code})

export default authorizationReducer;