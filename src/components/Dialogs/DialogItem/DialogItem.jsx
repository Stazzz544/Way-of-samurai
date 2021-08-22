import s from './../Dialogs.module.css';
import {NavLink } from "react-router-dom";

const DialogItem = (props) =>{
	let path = `/dialogs/${props.id}`,
		 avatarLink = `/img/content/friends/${props.avatar}`;
	return(
		<div className={s.dialog}>
			<div className={s.dialogsAvatar}>
				<img className={s.dialogsAvatarImg} alt="avatar" src={avatarLink} ></img>
			</div>
			<NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;