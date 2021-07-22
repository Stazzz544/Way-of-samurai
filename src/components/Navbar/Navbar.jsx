import s from './Navbar.module.css';
import NavFriends from './NavFriends/NavFriends';
import Navigation from './Navigation/Navigation';

import {
	BrowserRouter as Router,
	NavLink 
} from "react-router-dom";



const Navbar = (props) => {

	let NavFriendsElements = props.state.dialogs
	.map( d => <NavFriends name={d.name} avatar={d.avatar}/>)

	let newNavigationElement = props.navItems
	.map( n =>  <Navigation link={n.link} category={n.category}/>)

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