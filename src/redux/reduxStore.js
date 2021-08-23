import {combineReducers, createStore, applyMiddleware} from "redux";

import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReduser';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

//для работы redux dev tools использовать код ниже:

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));


export default store;