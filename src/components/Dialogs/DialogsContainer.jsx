import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

	return <StoreContext.Consumer> 
		{ (store) => {
			
			let state = store.getState().dialogsPage;

			let onSendMessageClick = () => {
				store.dispatch(addMessageActionCreator());
			};

			function onNewMessageChange(body) {
				store.dispatch(updateNewMessageBodyCreator(body));
			}

			return <Dialogs
				updateNewMessageBodyCreator={onNewMessageChange}
				sendMessage={onSendMessageClick}
				dialogsPage={state} />
		}
	}
	</StoreContext.Consumer>
}

export default DialogsContainer;