import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

	let postsElement = props.posts.
	map( p => <Post message={p.post} likesCount={p.likesCount}/>)

	let newPostElement = React.createRef();

	let addPost = (e) => {
		let text = newPostElement.current.value;
		alert(text)
	}

	return (
		<div className="">
			<h2 className={s.postTitle}>My post</h2>
			<form action="">
				<textarea className={s.textField} placeholder="New message..." ref={newPostElement}></textarea>
				<div className={s.buttonWrapper}>
					<button onClick={addPost} className={s.button}>Send</button>
				</div>
			</form>
			{postsElement}
		</div>
	)
}


export default MyPosts;