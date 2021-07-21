
import s from './App.module.css';


import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import {
	Switch,
	Route,
	Link
 } from "react-router-dom";

const App = (props) => {

	return (
		<div className={s.appWrapper}>
			<Header/>
			<Navbar/>
				<Switch>
					<div className={s.appContentWrapper}>
						<Route  path="/dialogs" 
								  render={ () => <Dialogs 
										state={props.state.dialogsPage}/>}></Route>
						<Route  path="/profile"
								  render={ () => <Profile 
								  		state={props.state.profilePage} />}></Route>
						<Route  path="/news" component={News}></Route>
						<Route  path="/Music" component={Music}></Route>
						<Route  path="/settings" component={Settings}></Route>
					</div>
				</Switch>
		</div>
	);
}

export default App;
