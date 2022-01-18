const SET_AUTHORIZATION_USER = 'SET_AUTHORIZATION_USER';
const SET_AUTHORIZATION_DATA = 'SET_AUTHORIZATION_DATA';
const CHANGE_RESULT_CODE = 'CHANGE_RESULT_CODE';

let defaultState = {
    data: {
        userId: null,
        id: null,
        login: null,
        email: null,
        authFlag: false
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
        case SET_AUTHORIZATION_DATA:
            return {
                ...state,
                data: {
                    userId: action.payload.data.userId
                },
                resultCode: action.payload.resultCode
            }
        case CHANGE_RESULT_CODE:
            return {
                ...state,
                data: {
                    id: action.payload,
                    login: action.payload,
                    email: action.payload,
                },
                authFlag: true,
                resultCode: action.payload
            }
        default:
            return state;
    }
};

export const setAuthorizationUser = (data) => ({type: SET_AUTHORIZATION_USER, payload: data})
export const setAuthorizationData = (data) => ({type: SET_AUTHORIZATION_DATA, payload: data})
export const changeResultCode = (code) => ({type: CHANGE_RESULT_CODE, payload: code})

export default authorizationReducer;