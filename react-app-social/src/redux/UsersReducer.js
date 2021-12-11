const ADD_USER_TO_FRIEND = 'ADD-USER-TO-FRIEND';
const DELETE_USER = 'DELETE-USER';
const GET_USERS = 'GET-USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_TO_FRIEND:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user;
                })
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.map( (user, index, array) => {
                    if (user.id === action.userId) {
                        array.splice(index, 1);
                    }
                    return {...user};
                })
            };
        case GET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users ]
            };
        default:
            return state;
    }
};

export const addUserToFriend_CA = (userId) => ({type: ADD_USER_TO_FRIEND, userId});
export const deleteUser_CA = (userId) => ({type: DELETE_USER, userId});
export const getUsers_AC = (users) => ({type: GET_USERS, users});

export default usersReducer;