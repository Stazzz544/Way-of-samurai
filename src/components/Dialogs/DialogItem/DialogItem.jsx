import s from './../Dialogs.module.css';
import {
	BrowserRouter as Router,
	NavLink 
} from "react-router-dom";

const DialogItem = (props) =>{
	let path = `/dialogs/${props.id}`,
		 avatarLink = `./../../../img/content/friends/legolas.jpg`;
	return(
		<div className={s.dialog}>
			<div className="dialogsAvatar">
				<img src={img} ></img>
			</div>
			<NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;