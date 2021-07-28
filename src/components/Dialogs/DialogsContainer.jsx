import Dialogs from './Dialogs';
import React from 'react';
import {addMessageActionCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';


const DialogsContainer = (props) => {
	
	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(addMessageActionCreator());
	};

	function onNewMessageChange (body) {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}

	return (<Dialogs 
				dialogsPage={state}
				sendMessage={onSendMessageClick}
				updateNewMessageBodyCreator={onNewMessageChange}/>)
}

export default DialogsContainer;