import {combineReducers, createStore, compose, applyMiddleware} from "redux";

import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReduser';



let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer
})

//для работы redux dev tools использовать код ниже:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

//ниже оригинальный код. Если его раскомментить - нужно закоментить код выше.
//let store = createStore(reducers);

export default store;