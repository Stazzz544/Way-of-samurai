import React from 'react';
import s from './Users.module.css';



let Users = (props) => {
	debugger

	let avatarLink = `/img/content/friends/${props.avatar}`;
	let testAv = 'https://sun9-39.userapi.com/impf/c850336/v850336438/325e3/Uo_qNoQBUeM.jpg?size=1932x1932&quality=96&sign=7f5bf51a17fc3401df4dad2245c7eca1&type=album';

	return (
		<div className={s.usersWrapper}>
			<h1 className={s.usersTitle}>Users</h1>
			
			<div className={s.userWrapper}>
				<div className={s.userAvatarAndButton}>
					<div className={s.userAvatar}>
						<img className={s.userAvatarImg} src={testAv} />
					</div>
					<button className={s.userFollowBtn}>Follow</button>
				</div>
				<div className={s.userInfo}>
					<div className={s.userFullnameAndStatus}>
						<div className={s.userFullName}>Stas Djeckson</div>
						<div className={s.userStatus}>lifestile ok, and fuck off</div>
					</div>
					<div className={s.userCountryAndCity}>
						<div className={s.userCountry}>Russia</div>
						<div className={s.userCity}>Saint-Petersburg</div>
					</div>
				</div>
			</div>

		</div>
		
	)
}

export default Users;