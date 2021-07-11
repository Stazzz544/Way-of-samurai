import contentBg from './../../img/content/contentBg.jpeg';
import userPhoto from './../../img/content/userPhoto.jpg';
import MyPosts from './../MyPosts/MyPosts';
import Post from './../MyPosts/Post/Post';
import s from './Profile.module.css';


const Profile = () => {
	return (
		<div className={s.content}>
			<div className="">
				<div className={s.userBackground}>
					<img className={s.userBackgroundImg} src={contentBg} alt='user background'/>
				</div>
				<div className={s.userPage}>
					<div className={s.userAvatarWrapper}>
						<img className={s.userAvatar} src={userPhoto} alt='user avatar'/>
					</div>
					<div className={s.userInfo}>
						<h2 className={s.userInfoItem}>Robin Hood</h2>
						<h3 className={s.userInfoItem}>Date of Birth: 17 april 1244</h3>
						<h3 className={s.userInfoItem}>City: London</h3>
						<h3 className={s.userInfoItem}>Education: none</h3>
						<h3 className={s.userInfoItem}>Web site: cocodjambo.ru</h3>
					</div>
				</div>
			</div>
			
			<MyPosts/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>

		</div>
	)
}

export default Profile;