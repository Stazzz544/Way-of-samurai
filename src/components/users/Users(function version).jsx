import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../accets/images/user.png';



let Users = (props) => {


	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {

					props.setUsers(response.data.items);
				});
		}
	};


	// if (props.users.length === 0) {
	// 	props.setUsers ( 
	// 		[{
	// 		id: 1,
	// 		followed: true,
	// 		avatar: 'legolas.jpg',
	// 		fullname: 'Legolas',
	// 		status: 'I am the best archer!',
	// 		location: {
	// 			city: 'forest',
	// 			country: 'Ferelden'
	// 		}
	// 		},
	// 		{
	// 		id: 2,
	// 		followed: false,
	// 		avatar: 'vaider.jpg',
	// 		fullname: 'Darth-Vader',
	// 		status: `I'm your father...`,
	// 		location: {
	// 			city: 'Big desert',
	// 			country: 'Tatuin'
	// 		}
	// 		},
	// 		{
	// 		id: 3,
	// 		followed: true,
	// 		avatar: 'nikola.jpg',
	// 		fullname: 'Nikola',
	// 		status: 'Elictricity!!',
	// 		location: {
	// 			city: 'Smiljan',
	// 			country: 'Austrian Empire'
	// 		}
	// 		},]
	// 	)};

	//let avatarLink = `/img/content/friends/`;

	return (
		<div className={s.usersWrapper}>

			<h1 className={s.usersTitle}>Users</h1>
			<button onClick={getUsers}>INTERNET!!!!!!!!</button>
			{
				props.users.map(u =>
					<div key={u.id} className={s.userWrapper}>
						<div className={s.userAvatarAndButton}>
							<div className={s.userAvatar}>
								<img className={s.userAvatarImg}
									src={u.photos.small != null ? u.photos.small : userPhoto} />
							</div>
							{u.followed
								? <button onClick={() => { props.unfollow(u.id) }} className={s.userFollowBtn}>Follow</button>
								: <button onClick={() => { props.follow(u.id) }} className={s.userFollowBtn}>Unfollow</button>}
						</div>
						<div className={s.userInfo}>
							<div className={s.userFullnameAndStatus}>
								<div className={s.userFullName}>{u.name}</div>
								<div className={s.userStatus}>{u.status}</div>
							</div>
							<div className={s.userCountryAndCity}>
								<div className={s.userCountry}><span>Country:</span> {'u.location.country'}</div>
								<div className={s.userCity}><span>City:</span> {'u.location.city'}</div>
							</div>
						</div>
					</div>
				)}
		</div>
	)
}

export default Users;