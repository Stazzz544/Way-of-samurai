import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = () => {

	let posts = [
		{'id': 0, 'post': 'Hello everybody!', 'likesCount': 33},
		{'id': 1, 'post': "it's my first post", 'likesCount': 13},
		{'id': 2, 'post': 'How does it works?!', 'likesCount': 1},
	];

	let postsElement = posts
	.map( p => <Post message={p.post} likesCount={p.likesCount}/>)

	return (
		<div className="">
			<h2 className={s.postTitle}>My post</h2>
			<form action="">
				<textarea className={s.textField} placeholder="New message..." name="" id=""></textarea>
				<div className={s.buttonWrapper}>
					<button className={s.button}>Send</button>
				</div>
			</form>
			{postsElement}
		</div>
	)
}


export default MyPosts;