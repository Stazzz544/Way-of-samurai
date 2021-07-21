import s from './NavFriends.module.css';


const NavFriends = (props) => {
	return (

			<div className={s.FriendsWrapper}>
				<div className={s.Friends}>Friends</div>
				<div className={s.friendsList}>
					<div className={s.friend}>
						<img src="" alt="friends avatar" />
						<div className={s.friendName}>Ali</div>
					</div>
					<div className={s.friend}>
						<img src="" alt="friends avatar" />
						<div className={s.friendName}>Ali</div>
					</div>
					<div className={s.friend}>
						<img src="" alt="friends avatar" />
						<div className={s.friendName}>Ali</div>
					</div>
				</div>
			</div>
	)
}

export default NavFriends;