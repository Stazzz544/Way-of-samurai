
import s from './App.module.css';


import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components//Dialogs/Dialogs';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
 } from "react-router-dom";

const App = () => {
	return (
		
		<div className={s.appWrapper}>
			<Header/>
			<Navbar/>
			<div className={s.appContentWrapper}>
				<Route component={<Dialogs/>}></Route>
				<Route component={<Profile/>}></Route>
			</div>
		</div>
	);
}

export default App;
