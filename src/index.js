import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './components/FriendBar';
import './components/comments';
import './components/showcomments';
import './components/topbar';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
