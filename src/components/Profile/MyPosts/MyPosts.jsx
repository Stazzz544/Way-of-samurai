import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, 
		  updateNewPostTextActionCreator} from '../../../redux/profileReducer'

const MyPosts = (props) => {
	debugger
	let postsElement = props.profilePage.posts
	.map( p => <Post message={p.post} likesCount={p.likesCount}/>)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostTextActionCreator(text);
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
					<button onClick={onAddPost} className={s.button}>Send</button>
				</div>
			{postsElement}
		</div>
	)
}


export default MyPosts;