const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		// {id: 1, followed: true, fullname: 'Nika', status: 'i am a lady', location: {city: 'SPb', country: 'Russia'}},
		// {id: 2, followed: false, fullname: 'Gena', status: 'OLOLO', location: {city: 'Moscow', country: 'Russia'}},
		// {id: 3, followed: true, fullname: 'Negr', status: 'MATUMBA!', location: {city: 'Gana', country: 'Nigeria'}},
	]
}

const userReducer = (state = initialState, action) => {

	switch(action.type) {
		case FOLLOW:
			return {
				...state, 
				//users: [...state.users], <- запись ниже эквевалентна этой
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state, 
				//users: [...state.users], <- запись ниже эквевалентна этой
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
			}
		case SET_USERS: {
			return {...state, users: [...state.users, ...action.users ]}
		}
		default:
			return state
	}
};

export const folowAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (users) => ({type: SET_USERS, users})

export default userReducer;