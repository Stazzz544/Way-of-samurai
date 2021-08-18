import {combineReducers, createStore, compose, applyMiddleware} from "redux";

import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReduser';
import authReducer from './auth-reducer';
import { composeWithDevTools } from 'redux-devtools-extension'


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

//для работы redux dev tools использовать код ниже:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));


export default store;