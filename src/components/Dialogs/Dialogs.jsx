import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';

const Dialogs = (props) => {

	let newMessageElement = React.createRef();

	let dialogsElements = props.state.dialogs
	.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/> )

	let messagesElements = props.state.messages
	.map( m => <Message message={m.message}/>)

	let addMessage = () => {
		props.addMessage();
	};

	function onMessageChange () {
		let text = newMessageElement.current.value;
		props.updateNewDialogText(text);
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
								 onChange={onMessageChange}
								 value={props.state.newDialogText} 
								 ref={newMessageElement}></textarea>
					<button onClick={addMessage} className={s.dialogsButton}>отправить</button>
				</div>
				
			</div>
		</div>
	)
}

export default Dialogs;