const ADD_USER_TO_FRIEND = 'ADD-USER-TO-FRIEND';
const CANCEL_USER_TO_FRIEND = 'CANCEL-USER-TO-FRIEND';
const DELETE_USER = 'DELETE-USER';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_USERS_PAGE = 'SET-CURRENT-USERS-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageUsersSize: 12,
    currentUsersPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case CANCEL_USER_TO_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case SET_CURRENT_USERS_PAGE: {
            return {
                ...state,
                currentUsersPage: action.currentPage
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

export const addUser = (userId) => ({type: ADD_USER_TO_FRIEND, userId});
export const cancelActionUser = (userId) => ({type: CANCEL_USER_TO_FRIEND, userId});
export const deleteUser = (userId) => ({type: DELETE_USER, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_USERS_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;