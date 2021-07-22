import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';

const Dialogs = (props) => {

	let textMessage = React.createRef();

	let dialogsElements = props.state.dialogs
	.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/> )

	let messagesElements = props.state.messages
	.map( m => <Message message={m.message}/>)


	function newMessage () {
		alert(textMessage.current.value) 
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
					<textarea placeholder='New message...' className={s.dialogsTextarea} ref={textMessage}></textarea>
					<button onClick={newMessage} className={s.dialogsButton}>отправить</button>
				</div>
				
			</div>
		</div>
	)
}

export default Dialogs;