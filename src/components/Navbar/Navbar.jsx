import s from './Navbar.module.css';
import NavFriends from './NavFriends/NavFriends';

import {
	BrowserRouter as Router,
	NavLink 
} from "react-router-dom";



const Navbar = (props) => {
	return (

		<div className={s.nav}>
			<nav className={s.navbarWrapper}>
				<div className={s.item}>
					<NavLink activeClassName={s.active} className={s.link} to='/profile'>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink activeClassName={s.active} className={s.link} to='/dialogs'>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink activeClassName={s.active} className={s.link} to='/news'>News</NavLink>
				</div>
				<div className={s.item}>
					<NavLink activeClassName={s.active} className={s.link} to='/Music'>Music</NavLink>
				</div>
				<div className={s.item}>
					<NavLink activeClassName={s.active} className={s.link} to='/settings'>Settings</NavLink>
				</div>
			</nav>


			<NavFriends/>

		</div>

		

	)
}

export default Navbar;