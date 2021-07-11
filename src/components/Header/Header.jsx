import mainLogo from './../../img/logo/mainLogo.png';
import s from'./Header.module.css';

const Header = () => {
	return(
		<header className={s.header}>
				<img className={s.logo} alt='Logo' src={mainLogo} />
				<span className={s.title}>Social network for true Robin-Hood's!</span>
		</header>
	);
}

export default Header;