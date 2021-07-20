import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{'id': 0, 'post': 'Hello everybody!', 'likesCount': 33},
	{'id': 1, 'post': "it's my first post", 'likesCount': 13},
	{'id': 2, 'post': 'How does it works?!', 'likesCount': 1},
];

let dialogs = [
	{'id': 0, 'name': 'Legolas'},
	{'id': 1, 'name': 'Ali'},
	{'id': 2, 'name': 'Nikol'},
	{'id': 3, 'name': 'Abidos'},
	{'id': 4, 'name': 'Zavulon'},
	{'id': 5, 'name': 'Darth-Vader'},
];

let messages = [
	{'id': 0, 'message': 'Hi!'},
	{'id': 1, 'message': 'How are you?'},
	{'id': 2, 'message': "Why don't you answer me?"},
];

ReactDOM.render(

  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
