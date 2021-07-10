import s from './Navbar.module.css';

const Navbar = () => {
	return(
		<nav className={s.nav}>
			<div className={s.item}>
				<a className={s.link} href="">Profile</a>
			</div>
			<div className={s.item}>
				<a className={s.link} href="">Messages</a>
			</div>
			<div className={s.item}>
				<a className={s.link} href="">News</a>
			</div>
			<div className={s.item}>
				<a className={s.link} href="">Music</a>
			</div>
			<div className={s.item}>
				<a className={s.link} href="">Settings</a>
			</div>
		</nav>
	)
}

export default Navbar;