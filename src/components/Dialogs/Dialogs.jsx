import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {

	let dialogs = [
		{'id': 0, 'name': 'Legolas'},
		{'id': 1, 'name': 'Ali'},
		{'id': 2, 'name': 'Nikol'},
		{'id': 3, 'name': 'Abidos'},
		{'id': 4, 'name': 'Zavulon'},
		{'id': 5, 'name': 'Darth-Vader'},
	];

	let dialogsElements = dialogs
	.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )

	let messages = [
		{'id': 0, 'message': 'Hi!'},
		{'id': 1, 'message': 'How are you?'},
		{'id': 2, 'message': "Why don't you answer me?"},
	];

	let messagesElements = messages
	.map( message => <Message message={message.message}/>)

	return(
		<div className={s.dialogsWrapper}>
			<h1 className={s.title}>Dialogs</h1>

			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					{messagesElements}
				</div>
			</div>
		</div>
	)
}

export default Dialogs;