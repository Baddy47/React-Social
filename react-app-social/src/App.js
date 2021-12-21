import './App.css';
import styles from './AuthorisationPage.module.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import React from "react";
import MessagesContainer from "./components/messages/MessagesContainer";
import FindUsersContainer from "./components/findUsers/FindUsersContainer";
import MyProfileContainer from "./components/profile/myProfile/MyProfileContainer.jsx";
import Friends from "./components/friends/Friends";
import Groups from "./components/groups/Groups";
import HomeContainer from "./components/home/HomeContainer";
import Authorization from "./components/authorizationPage/Authorization";
import {useSelector} from "react-redux";

const App = () => {

	const authResp = useSelector(state => state.authorization.resultCode);

	if (authResp === 1 || authResp === null) {
		return (
			<div className={styles.authorPageContent}>
				<Routes>
					<Route path='/sign-in/*' exact={true} element={<Authorization/>}/>
				</Routes>
			</div>
		)
	} else if (authResp === 0) {
		return (
			<div className='App'>
				<Header/>
				<Navbar/>
				<Sidebar/>
				<div className='appContent'>
					<Routes>
						<Route path='/profile' exact={true} element={<MyProfileContainer/>}>
							<Route path=':userId' element={<MyProfileContainer/>}/>
						</Route>
						<Route path='/messages/*' element={<MessagesContainer/>}/>
						<Route path='/news/*' element={<News/>}/>
						<Route path='/find-users/*' element={<FindUsersContainer/>}/>
						<Route path='/music/*' element={<Music/>}/>
						<Route path='/settings/*' element={<Settings/>}/>
						<Route path='/home/*' element={<HomeContainer/>}/>
						<Route path='/friends/*' element={<Friends/>}/>
						<Route path='/groups/*' element={<Groups/>}/>
					</Routes>
				</div>
			</div>
		)
	}
};


//     return (
//         <div >
// 			<div className={styles.authorPageContent}>
// 				<Routes>
// 					<Route path='/sign-in/*' element={<Authorization/>}/>
// 				</Routes>
// 			</div>
//             <div className='App'>
//                 <Header/>
//                 <Navbar/>
//                 <Sidebar/>
// 				<div className='appContent'>
// 					<Routes>
// 						<Route path='/profile' element={<MyProfileContainer/>}>
// 							<Route path=':userId' element={<MyProfileContainer/>}/>
// 						</Route>
// 						<Route path='/messages/*' element={<MessagesContainer/>}/>
// 						<Route path='/news/*' element={<News/>}/>
// 						<Route path='/find-users/*' element={<FindUsersContainer/>}/>
// 						<Route path='/music/*' element={<Music/>}/>
// 						<Route path='/settings/*' element={<Settings/>}/>
// 						<Route path='/home/*' element={<HomeContainer/>}/>
// 						<Route path='/friends/*' element={<Friends/>}/>
// 						<Route path='/groups/*' element={<Groups/>}/>
// 					</Routes>
// 				</div>
//             </div>
//         </div>
//     )
// }

export default App;