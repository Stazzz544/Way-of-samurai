let store = {
	_state: {
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
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('state changed');
	},
	addPost() {
		let newPost = {
			id: 5,
			post: this._state.profilePage.newPostText,
			likesCount: 0,
		};
	
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText='';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	addMessage() {
		let newMessage = {
			id: 5,
			message: this._state.dialogsPage.newDialogText,
		};
		this._state.dialogsPage.messages.push(newMessage);
		this._state.dialogsPage.newDialogText='';
		this._callSubscriber(this._state);
		
	},
	updateNewDialogText(newDialogText) {
		this._state.dialogsPage.newDialogText = newDialogText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
}

export default store;

window.store = store;