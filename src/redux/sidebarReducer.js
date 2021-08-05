
let initialState = {
	sidebar: [
	{'link': '/profile', 'category': 'Profile', 'id' : 1},
	{'link': '/dialogs', 'category': 'Messages', 'id' : 2},
	{'link': '/news', 'category': 'News', 'id' : 3},
	{'link': '/music', 'category': 'Music', 'id' : 4},
	{'link': '/settings', 'category': 'Settings', 'id' : 5},
	{'link': '/users', 'category': 'Friends', 'id' : 6},
	],
}

const sidebarReducer = (state = initialState) => {

	return state;
};

export default sidebarReducer;