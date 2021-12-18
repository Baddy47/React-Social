import React, {Component} from "react";
import * as styles from './FindUsers.module.css';
import UserCard from "./UserCard";
import axios from "axios";
import Preloader from "../../common/preloader/Preloader";

class FindUsers extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setTotalCount(response.data.totalCount)
                if (this.props.users.length === 0)
                    this.props.setUsers(response.data.items)
            })
    }

    onChangePage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pageCount = Math.ceil((this.props.totalCount / 300) / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div className={styles.usersWrapper}>
                {this.props.isFetching ? <Preloader /> : null}
                <h2>What if..?</h2>
                <div className={styles.usersContainer}>
                    {this.props.users.map(user =>
                        (<UserCard users={user} key={user.id} dispatch={this.props}/>))
                    }
                </div>
                <div className={styles.pages}>
                    {pages.map((page, index) => {
                        return (<span onClick={() => {this.onChangePage(page)}}
                                      key={index}
                                      className={this.props.currentPage === page ? styles.pageActive : styles.page}>{page}</span>)
                    })}
                </div>

            </div>
        )
    }
}

export default FindUsers;