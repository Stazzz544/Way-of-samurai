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
		updateNewMessageBodyCreator: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
			debugger
		},
		sendMessage: () => {
			dispatch(addMessageActionCreator());
			
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;