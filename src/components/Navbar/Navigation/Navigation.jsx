import s from './Navigation.module.css';
import {
	NavLink 
} from "react-router-dom"; 


const Navigation = (props) => {

	return (

		<div className={s.item}>
			<NavLink activeClassName={s.active} className={s.link} to={props.link}>{props.category}</NavLink>
		</div>
	)
}

export default Navigation;