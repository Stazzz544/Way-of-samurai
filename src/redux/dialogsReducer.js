const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type){
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody='';
			state.messages.push({id: 6, message: body});
			return state
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 
	({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;