import './App.css';
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
import MyProfileContainer from "./components/profile/myProfile/MyProfileContainer";

function App() {
	return (
			<div className="App">
				<Header />
				<Navbar />
				<Sidebar />
				<div className='appContent'>
					<Routes>
						<Route path='/profile/*' exact={true} element={<MyProfileContainer />} />
						<Route path='/messages/*' element={<MessagesContainer />} />
						<Route path='/news/*' element={<News />} />
						<Route path='/find-users/*' element={<FindUsersContainer />} />
						<Route path='/music/*' element={<Music />} />
						<Route path='/settings/*' element={<Settings />} />
					</Routes>
				</div>
			</div>
)
}

export default App;