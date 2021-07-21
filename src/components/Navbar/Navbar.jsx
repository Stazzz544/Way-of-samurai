import s from './Navbar.module.css';
import {
	BrowserRouter as Router,
	NavLink 
} from "react-router-dom";



const Navbar = () => {
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

			<div className={s.FriendsWrapper}>
				<div className={s.Friends}>Friends</div>
				<div className={s.friendsList}>
					<div className={s.friend}>
						<img src="" alt="friends avatar" />
						<div className={s.friendName}>Ali</div>
					</div>
				</div>
			</div>

		</div>

		

	)
}

export default Navbar;