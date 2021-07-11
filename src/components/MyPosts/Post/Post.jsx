import s from './Post.module.css';
import userPhoto from './../../../img/content/userPhoto.jpg';

const Post = () => {
	return (
		<div className={s.postWrapper}>
			<div className={s.postAvatarWrapper}>
				<img className={s.postAvatar} src={userPhoto} alt="user avatar" />
			</div>
			<div className={s.postText}>It's my first post!</div>
		</div>
	)
}

export default Post;