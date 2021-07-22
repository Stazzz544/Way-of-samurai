import s from './NavFriends.module.css';


const NavFriends = (props) => {
	let avatarLink = `/img/content/friends/${props.avatar}`;

	return (

			<div className={s.friend}>
				<div className={s.avatarWrapper}>
					<img className={s.avatarImg} src={avatarLink} alt={`${props.name}'s avatar`} />
				</div>
				<div className={s.friendName}>{props.name}</div>
		</div>

	)
}

export default NavFriends;