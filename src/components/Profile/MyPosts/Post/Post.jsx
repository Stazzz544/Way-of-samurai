import s from './Post.module.css';
// import userPhoto from './../../../../img/content/userPhoto.jpg';
// import like from './../../../../img/icon/like.png';

const Post = (props) => {
	return (
		<div className={s.postWrapper}>
			<div className={s.postAvatarWrapper}>
				<img className={s.postAvatar} src='/img/content/userPhoto.jpg' alt="user avatar" />
			</div>
			<div className={s.messageWrapper}>
				<div className={s.postText}>{props.message}</div>
				<div className={s.likeWrapper}>
					<img className={s.like} src='/img/icon/like.png' alt="" />
					<div className={s.likeCount}>{props.likesCount}</div>
				</div>
			</div>
		</div>
	)
}

export default Post;