import s from './ProfileInfo.module.css';
// import contentBg from './../../../img/content/contentBg.jpeg';
//API: https://social-network.samuraijs.com/

import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className="">
			<div className={s.userBackground}>
				<img className={s.userBackgroundImg} src='/img/content/contentBg.jpeg' alt='user background' />
			</div>
			<div className={s.userPage}>
				<div className={s.userAvatarWrapper}>
					<img className={s.userAvatar} src={props.profile.photos.large} alt='user avatar' />
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
	)
}

export default ProfileInfo;