import s from './Navbar.module.css';
import NavFriends from './NavFriends/NavFriends';
import Navigation from './Navigation/Navigation';

const Navbar = (props) => {
	let NavFriendsElements = props.dialogs
	.map( d => <NavFriends name={d.name} key={d.id} avatar={d.avatar}/>)
	let newNavigationElement = props.sidebar
	.map( n =>  <Navigation link={n.link} key={n.id} category={n.category}/>)
	

	return (
		<div className={s.nav}>
			<nav className={s.navbarWrapper}>
				{newNavigationElement}
			</nav>	
			<div className={s.FriendsWrapper}>
				{NavFriendsElements}
			</div>
		</div>

		

	)
}

export default Navbar;