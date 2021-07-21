let state = {
	profilePage: {
		posts: [
			{'id': 0, 'post': 'Hello everybody!', 'likesCount': 33},
			{'id': 1, 'post': "it's my first post", 'likesCount': 13},
			{'id': 2, 'post': 'How does it works?!', 'likesCount': 1},
		],
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
	},
	sidebar: {

	},
}

export default state;