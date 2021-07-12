
import s from './App.module.css';


import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

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
			
			<Router>
			<Navbar/>
				<Switch>
					<div className={s.appContentWrapper}>
						<Route path="/dialogs" component={Dialogs}></Route>
						<Route path="/profile" component={Profile}></Route>
						<Route path="/news" component={News}></Route>
						<Route path="/Music" component={Music}></Route>
						<Route path="/settings" component={Settings}></Route>
					</div>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
