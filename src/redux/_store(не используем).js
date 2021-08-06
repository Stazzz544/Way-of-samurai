
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

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
			newMessageBody: ''
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
};







export default store;

window.store = store;