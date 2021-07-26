const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
	_state: {
		profilePage: {
			posts: [
				{'id': 0, 'post': 'Hello everybody!', 'likesCount': 33},
				{'id': 1, 'post': "it's my first post", 'likesCount': 13},
				{'id': 2, 'post': 'How does it works?!', 'likesCount': 1},
			],
			newMessageBody: ''
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
	_callSubscriber() {
		console.log('state changed');
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state;
	},
	dispatch(action) {
		if(action.type === ADD_POST) {
			let newPost = {
				id: 5,
				post: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText='';
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newDialogText = action.body;
			this._callSubscriber(this._state);

		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody='';
			this._state.dialogsPage.messages.push({id: 6, body});
			this._callSubscriber(this._state);
		}
	}
};


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
	({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 
		({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;

window.store = store;