
import s from './App.module.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {
	Switch,
	Route,
 } from "react-router-dom";
import UsersContainer from './components/users/UsersContainer';

const App = () => {
	return (
		<div className={s.appWrapper}>
			<Header/>
			<NavbarContainer/>
				<Switch>
					<div className={s.appContentWrapper}>
						<Route	path="/dialogs" 
									render={ () => <DialogsContainer/>}>
						</Route>
						<Route	path="/profile/:userId?" 
									render={ () => <ProfileContainer/>}>
						</Route>
						<Route	path="/news" component={News}></Route>
						<Route	path="/Music" component={Music}></Route>
						<Route	path="/settings" component={Settings}></Route>
						<Route	path="/Users"
									render={ () => <UsersContainer/> }>
						</Route>
					</div>
				</Switch>
		</div>
	);
}

export default App;
