import s from './Dialogs.module.css';
import {
	BrowserRouter as Router,
	NavLink 
} from "react-router-dom";

const DialogItem = (props) =>{
	let path = `/dialogs/${props.id}`;
	return(
		<div className={s.dialog}>
			<NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return(
		<div className={s.message}>{props.message}!</div>
	)
}

const Dialogs = (props) => {

	let dialogsData = [
		{'id': 0, 'name': 'Legolas'},
		{'id': 1, 'name': 'Ali'},
		{'id': 2, 'name': 'Nikol'},
		{'id': 3, 'name': 'Abidos'},
		{'id': 4, 'name': 'Zavulon'},
		{'id': 5, 'name': 'Darth-Vader'},
	];

	let messagesData = [
		{'id': 0, 'message': 'Hi!'},
		{'id': 1, 'message': 'How are you?'},
		{'id': 2, 'message': "Why don't you answer me?"},
		{'id': 3, 'message': 'Abidos'},
		{'id': 4, 'message': 'Zavulon'},
		{'id': 5, 'message': 'Darth-Vader'},
	];

	return(
		<div className={s.dialogsWrapper}>
			<h1 className={s.title}>Dialogs</h1>

			<div className={s.dialogs}>
				<div className={s.dialogsItems}>

					<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
					<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
					<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
					<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
					<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
					<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

				</div>
				<div className={s.messages}>

					<Message message={messagesData[0].message}/>
					<Message message={messagesData[1].message}/>
					<Message message={messagesData[2].message}/>

				</div>
			</div>
		</div>
	)
}

export default Dialogs;