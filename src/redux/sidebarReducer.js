
let initialState = {
	sidebar: [
	{'link': '/profile', 'category': 'Profile'},
	{'link': '/dialogs', 'category': 'Messages'},
	{'link': '/news', 'category': 'News'},
	{'link': '/music', 'category': 'Music'},
	{'link': '/settings', 'category': 'Settings'},
	{'link': '/friends', 'category': 'Friends'},
	],
}

const sidebarReducer = (state = initialState, action) => {

	return state;
};

export default sidebarReducer;