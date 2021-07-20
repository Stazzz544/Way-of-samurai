import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = () => {

	let postData = [
		{'id': 0, 'post': 'Hello everybody!', 'likesCount': 33},
		{'id': 1, 'post': "it's my first post", 'likesCount': 13},
		{'id': 2, 'post': 'How does it works?!', 'likesCount': 1},
	];

	return (
		<div className="">
			<h2 className={s.postTitle}>My post</h2>
			<form action="">
				<textarea className={s.textField} placeholder="New message..." name="" id=""></textarea>
				<div className={s.buttonWrapper}>
					<button className={s.button}>Send</button>
				</div>
			</form>
			<Post message={postData[0].post} likesCount={postData[0].likesCount}/>
			<Post message={postData[1].post} likesCount={postData[1].likesCount}/>
			<Post message={postData[2].post} likesCount={postData[2].likesCount}/>
		</div>
	)
}


export default MyPosts;