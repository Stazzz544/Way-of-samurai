import React from "react";
import userPhoto from '../../accets/images/user.png';
import s from './Users.module.css';
import {
	NavLink 
} from "react-router-dom"; 
import { usersAPI } from "../api/api";

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
							<NavLink to={'/profile/' + u.id}>
							<img className={s.userAvatarImg}
								src={u.photos.small != null ? u.photos.small : userPhoto} alt = 'avatar'/>
							</NavLink>
						</div>
						{u.followed
							? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => { 
									props.toggleFollowingProgress(true, u.id)
									usersAPI.unfollowUser(u.id).then(response=>{
										if (response ===  0) {
											props.unfollow(u.id)
										};
										props.toggleFollowingProgress(false, u.id)
									});
									
								}} className={s.userFollowBtn}>Follow</button>
							: <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
									props.toggleFollowingProgress(true, u.id)
									usersAPI.followUser(u.id).then(response=>{
										if (response ===  0) {
											props.follow(u.id)
										};
										props.toggleFollowingProgress(false, u.id)
									});
									
								}} className={s.userFollowBtn}>Unfollow</button>
							}
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

//Старый код для сравнения
//? <button onClick={() => { 
// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
// 	withCredentials: true,
// 	headers: {'API-KEY': 'a226a8a4-a574-455d-9792-fc8d5f462604'}
// })
// 	.then(response => {
