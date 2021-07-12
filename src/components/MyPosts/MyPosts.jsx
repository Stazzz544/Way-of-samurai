import s from './MyPosts.module.css';
import Post from './../MyPosts/Post/Post';




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
			<Post message="Hello everybody!" likesCount="33"/>
			<Post message="it's my first post!" likesCount="13"/>
			<Post message="How does it works?!" likesCount="0"/>
		</div>
	)
}


export default MyPosts;