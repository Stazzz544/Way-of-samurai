import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	};
};

let mapDispathToProps = (dispatch) => {
	return {
		updateNewMessageBodyCreator: () => {
			dispatch(addMessageActionCreator());
		},
		sendMessage: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;