import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

	let postsElement = props.posts
	.map( p => <Post message={p.post} likesCount={p.likesCount}/>)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className="">
			<h2 className={s.postTitle}>My post</h2>
				<textarea className={s.textField}
							 onChange={onPostChange} 
							 value={props.newPostText} 
							 placeholder="New message..." 
							 ref={newPostElement}/>
				<div className={s.buttonWrapper}>
					<button onClick={addPost} className={s.button}>Send</button>
				</div>
			{postsElement}
		</div>
	)
}


export default MyPosts;