import contentBg from './../img/content/contentBg.jpeg';
import userPhoto from './../img/content/userPhoto.jpg';
import s from './Profile.module.css';


const Profile = () => {
	return (
		<div className={s.content}>
			<div className="">
				<div className={s.userBackground}>
					<img className={s.userBackgroundImg} src={contentBg} />
				</div>
				<div className={s.userPage}>
					<div className={s.userAvatarWrapper}>
						<img className={s.userAvatar} src={userPhoto} />
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
			<div className="">
				<h2 className={s.postTitle}>My post</h2>
				<form action="">
					<textarea className={s.textField} placeholder="New message..." name="" id=""></textarea>
					<div className={s.buttonWrapper}>
						<button className={s.button}>Send</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Profile;