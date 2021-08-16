import {combineReducers, createStore} from "redux";

import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReduser';
import { composeWithDevTools } from 'redux-devtools-extension'


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer
})


let store = createStore(reducers, composeWithDevTools());

export default store;