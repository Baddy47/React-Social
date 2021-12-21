const ADD_USER_TO_FRIEND = 'ADD-USER-TO-FRIEND';
const CANCEL_USER_TO_FRIEND = 'CANCEL-USER-TO-FRIEND';
const DELETE_USER = 'DELETE-USER';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_USERS_PAGE = 'SET-CURRENT-USERS-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let defaultState = {
    users: [],
    totalCount: 0,
    pageSize: 12,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case CANCEL_USER_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: [...action.payload]
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalCount: action.payload
            }
        }
        case SET_CURRENT_USERS_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default:
            return state;
    }
};

export const addUser = (userId) => ({type: ADD_USER_TO_FRIEND, payload: userId});
export const cancelActionUser = (userId) => ({type: CANCEL_USER_TO_FRIEND,payload: userId});
export const deleteUser = (userId) => ({type: DELETE_USER,payload: userId});
export const setUsers = (users) => ({type: SET_USERS,payload: users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT,payload: totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_USERS_PAGE,payload: currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING,payload: isFetching});

export default usersReducer;