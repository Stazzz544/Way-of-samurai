import Navbar from './Navbar';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar.sidebar,
		dialogs: state.dialogsPage.dialogs
	};
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;