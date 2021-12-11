import React from "react";
import * as styles from './FindUsers.module.css';
import UserCard from "./UserCard";

const FindUsers = (props) => {

    if (props.users.length === 0) {
        props.getUsers( [
                {
                id: 0,
                follow: false,
                photoURL: 'https://reqres.in/img/faces/3-image.jpg',
                fullname: 'Alex',
                status: 'Tired of everyone'
            },
                {
                    id: 1,
                    follow: false,
                    photoURL: 'https://reqres.in/img/faces/6-image.jpg',
                    fullname: 'Andrew',
                    status: 'I gona to party!'
                },
                {
                    id: 2,
                    follow: false,
                    photoURL: 'https://reqres.in/img/faces/5-image.jpg',
                    fullname: 'Mike',
                    status: 'I sleep!'
                },
                {
                    id: 3,
                    follow: false,
                    photoURL: 'https://reqres.in/img/faces/2-image.jpg',
                    fullname: 'Natali',
                    status: 'I need help!'
                }
            ]
        )
    }

    return (
        <div className={styles.usersContainer}>
            { props.users.map(user =>
                (<UserCard users={user} key={user.id} dispatch={props} />))
            }
        </div>
    )
};

export default FindUsers;