import mainLogo from './../img/logo/mainLogo.png';

const Header = () => {
	return(
		<header className='app-header'>
				<img className="app-header__logo" alt='Logo' src={mainLogo} />
				<span className="app-header__title">Social network for true Robin-Hood's!</span>
		</header>
	)
}

export default Header;