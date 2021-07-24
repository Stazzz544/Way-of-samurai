import {rerenderEntireTree} from '../render';

let state = {
	profilePage: {
		posts: [
			{'id': 0, 'post': 'Hello everybody!', 'likesCount': 33},
			{'id': 1, 'post': "it's my first post", 'likesCount': 13},
			{'id': 2, 'post': 'How does it works?!', 'likesCount': 1},
		],
		newPostText: ''
	},	
	dialogsPage: {
		messages: [
			{'id': 0, 'message': 'Hi!'},
			{'id': 1, 'message': 'How are you?'},
			{'id': 2, 'message': "Why don't you answer me?"},
		],
		dialogs: [
			{'id': 0, 'name': 'Legolas', 'avatar': 'legolas.jpg'},
			{'id': 1, 'name': 'Ali', 'avatar': 'ali.jpg'},
			{'id': 2, 'name': 'Nikola', 'avatar': 'nikola.jpg'},
			{'id': 3, 'name': 'Shepard', 'avatar': 'shepard.jpg'},
			{'id': 4, 'name': 'Mark', 'avatar': 'mark.jpg'},
			{'id': 5, 'name': 'Darth-Vader',  'avatar': 'vaider.jpg'},
		],
		newDialogText: ''
	},
	sidebar: [
		{'link': '/profile', 'category': 'Profile'},
		{'link': '/dialogs', 'category': 'Messages'},
		{'link': '/news', 'category': 'News'},
		{'link': '/music', 'category': 'Music'},
		{'link': '/settings', 'category': 'Settings'},
		{'link': '/friends', 'category': 'Friends'},
	],
}

export let addPost = () => {
	let newPost = {
		id: 5,
		post: state.profilePage.newPostText,
		likesCount: 0,
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText='';
	rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};

export let addMessage = () => {
	let newMessage = {
		id: 5,
		message: state.dialogsPage.newDialogText,
	};
	

	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newDialogText='';
	rerenderEntireTree(state);
	
};

export let updateNewDialogText = (newDialogText) => {
	state.dialogsPage.newDialogText = newDialogText;
	rerenderEntireTree(state);
};


export default state;