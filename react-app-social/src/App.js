import * as styles from './App.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Videos from "./components/videos/Videos";
import Settings from "./components/settings/Settings";
import React from "react";
import MessagesContainer from "./components/messages/MessagesContainer";
import FindUsersContainer from "./components/findUsers/FindUsersContainer";
import MyProfileContainer from "./components/profile/myProfile/MyProfileContainer.jsx";
import Friends from "./components/friends/Friends";
import HomeContainer from "./components/home/HomeContainer";
import Authorization from "./components/authorizationPage/Authorization";
import {Routes, Route} from "react-router-dom";

const App = () => {

    return (
        <div className={styles.appWrapper}>
            <div className={styles.appContainer}>
                <Header />
                <div className={styles.appContainerMedia}>
                    <Navbar />
                    <Sidebar />
                </div>
                <div className={styles.appContainerMediaAll}><Navbar /></div>
                <div className={styles.appContainerMediaAll}><Sidebar /></div>
                <div className={styles.appContent}>
                    <Routes>
                        <Route path='/sign-in' element={<Authorization />}/>
                        <Route path='/profile' element={<MyProfileContainer />}>
                            <Route path=':userId' element={<MyProfileContainer />}/>
                        </Route>
                        <Route path='/messages' element={<MessagesContainer />}>
                            <Route path=':userChat' element={<MessagesContainer />}/>
                        </Route>
                        <Route path='/find-users' element={<FindUsersContainer />}/>
                        <Route path='/video' element={<Videos />}/>
                        <Route path='/settings' element={<Settings />}/>
                        <Route path='/home' element={<HomeContainer />}/>
                        <Route path='/friends' element={<Friends />}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
};


export default App;