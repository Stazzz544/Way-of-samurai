import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';

const Dialogs = (props) => {
	
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs
	.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/> )

	let messagesElements = state.messages
	.map( m => <Message message={m.message}/>)

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	function onNewMessageChange (e) {
		let body = e.target.value;
		props.updateNewMessageBodyCreator(body);
		
	}

	return(
		<div className={s.dialogsWrapper}>
			<h1 className={s.title}>Dialogs</h1>

			<div className={s.dialogs}>

				<div className={s.messages}>
					{messagesElements}
				</div>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.newMessageWrapper}>
					<textarea placeholder='New message...' 
								 className={s.dialogsTextarea}
								 onChange={onNewMessageChange}
								 value={state.newMessageBody}>
					</textarea>
					<button onClick={onSendMessageClick} 
							  className={s.dialogsButton}>отправить
					</button>
				</div>
				
			</div>
		</div>
	)
}

export default Dialogs;