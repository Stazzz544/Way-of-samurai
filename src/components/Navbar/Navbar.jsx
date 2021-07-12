import s from './Navbar.module.css';
import {
	BrowserRouter as Router,
	NavLink 
} from "react-router-dom";



const Navbar = () => {
	return (
		<nav className={s.nav}>
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
	)
}

export default Navbar;