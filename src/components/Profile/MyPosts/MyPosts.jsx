import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

	let postsElement = props.posts
	.map( p => <Post message={p.post} likesCount={p.likesCount}/>)

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	}

	return (
		<div className="">
			<h2 className={s.postTitle}>My post</h2>
				<textarea className={s.textField} placeholder="New message..." ref={newPostElement}></textarea>
				<div className={s.buttonWrapper}>
					<button onClick={addPost} className={s.button}>Send</button>
				</div>
			{postsElement}
		</div>
	)
}


export default MyPosts;