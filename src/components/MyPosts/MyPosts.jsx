import s from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div className="">
			<h2 className={s.postTitle}>My post</h2>
			<form action="">
				<textarea className={s.textField} placeholder="New message..." name="" id=""></textarea>
				<div className={s.buttonWrapper}>
					<button className={s.button}>Send</button>
				</div>
			</form>
		</div>
	)
}

export default MyPosts;