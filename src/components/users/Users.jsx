import React from "react";
import userPhoto from '../../accets/images/user.png';
import s from './Users.module.css';

let Users = (props) => {
	
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	if (pagesCount > 5) pagesCount = 5; //УМЕНЬШИЛ СТРАНИЧКИ ДО 5!! УДАЛИТЬ!!

	let pages = [];
	for (let i=1; i <= pagesCount; i++) {
		pages.push(i);
	}


	return(
		<div className={s.usersWrapper}>
		
		<h1 className={s.usersTitle}>Users</h1>
		<div className={s.usersPagePaginationWrapper}>
			{ pages.map( p => {
				
				return <span className={props.currentPage === p ? s.selected : s.usersPagePagination} onClick={(e)=>{props.onPageChanged(p); }}>{p}</span>
				
			})}
		</div>
		{
			props.users.map(u =>
				<div key={u.id} className={s.userWrapper}>
					<div className={s.userAvatarAndButton}>
						<div className={s.userAvatar}>
							<img className={s.userAvatarImg}
								src={u.photos.small != null ? u.photos.small : userPhoto} alt = 'avatar'/>
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