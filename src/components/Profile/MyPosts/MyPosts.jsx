import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, 
		  updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {
	let postsElement = props.profilePage.posts
	.map( p => <Post message={p.post} likesCount={p.likesCount}/>)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	}

	return (
		<div className="">
			<h2 className={s.postTitle}>My post</h2>
				<textarea className={s.textField}
							 onChange={onPostChange}
							 value={props.profilePage.newPostText}
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