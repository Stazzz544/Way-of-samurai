const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{'id': 0, 'post': 'Hello everybody!', 'likesCount': 33},
		{'id': 1, 'post': "it's my first post", 'likesCount': 13},
		{'id': 2, 'post': 'How does it works?!', 'likesCount': 1},
	],
	newPostText: ''
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				post: state.newPostText,
				likesCount: 0,
			};
			state.posts.push(newPost);
			state.newPostText='';
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
	({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;