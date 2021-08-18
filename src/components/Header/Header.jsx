import s from'./Header.module.css';
import { NavLink } from "react-router-dom"; 

const Header = (props) => {
	return(
		<header className={s.header}>
				<img className={s.logo} alt='Logo' src='/img/logo/mainLogo.png' />
				<span className={s.title}>Social network for true Robin-Hood's!</span>
				<div>
					<NavLink className={s.loginBlock} to='/login'>
						{props.isAuth === true?
						<div>{props.login}</div>
						:
						<div>Login</div>}
					</NavLink>
				</div>
		</header>
	);
}

export default Header;