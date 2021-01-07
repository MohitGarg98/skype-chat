import {useSelector, useDispatch} from "react-redux";
import React, {useState} from 'react';

import './App.css';
import {mohitMsg} from './actions';

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  let messages = state.mohit;
  const [text, settext] = useState();

  console.log(window.innerWidth);

  function addMessages(e) {
    e.preventDefault();
    var newMsg = e.target.message.value;
    if(newMsg===""){return}
    dispatch(mohitMsg(newMsg));
    settext('');
  }

  function setTextMsg(e) {
    settext(e.target.value);
  }


  return (
    <div className="App">
      <div className="body-container">
        <div className="left-aside-bar">
          <input type="text" placeholder="Search Skype" className="search"/><button className="search-btn"><i className="fas fa-search"></i></button>
          <div className="logo-container">
            <i className="fas fa-comment-alt"></i>
            <i className="fas fa-phone-volume"></i>
            <i className="fas fa-address-book"></i>
            <i className="fas fa-bell"></i>
          </div>
          <h4 className="text-center chat-heading">Recent Chats</h4>
          <ul className="names-container">
            <li className="names"><div className="name-container"><img src="./user.png" alt="user" className="user-image"/><span className="user-name">Nikhil</span></div></li><span className="line"></span>
            <li className="names" style={{backgroundColor: "white"}}><div className="name-container"><img src="./user.png" alt="user" className="user-image"/><span className="user-name">Mohit</span></div></li><span className="line"></span>
            <li className="names"><div className="name-container"><img src="./user.png" alt="user" className="user-image"/><span className="user-name">Bhavesh</span></div></li><span className="line"></span>
            <li className="names"><div className="name-container"><img src="./user.png" alt="user" className="user-image"/><span className="user-name">Harshit</span></div></li><span className="line"></span>
            <li className="names"><div className="name-container"><img src="./user.png" alt="user" className="user-image"/><span className="user-name">Rohan</span></div></li><span className="line"></span>
            <li className="names"><div className="name-container"><img src="./user.png" alt="user" className="user-image"/><span className="user-name">Gagan</span></div></li><span className="line"></span>
            <li className="names"><div className="name-container"><img src="./user.png" alt="user" className="user-image"/><span className="user-name">Gopal</span></div></li><span className="line"></span>
          </ul>
        </div>
            
        <div className="main-container">
          <h2 className="user-name-heading">Mohit</h2>
          <span className="call-container">
            <i className="fas fa-users"></i>
            <i className="fas fa-phone-volume"></i>
          </span>
          <span className="line"></span>
          <ul className="msg-list">
            <li className="msg-2">Hi, Mohit</li>
            <li className="msg-2">How r u..</li>
            <li className="msg">I am fine</li>
            <li className="msg">How r u..</li>
            <li className="msg-2">I m also fine</li>
            <li className="msg-2">Where r u..</li>
            {messages.map((msg, index) => (<li className="msg" key={index}>{msg}</li>))}
          </ul>
          <form onSubmit={addMessages}>
            <input name="message" autoComplete="off" onChange={setTextMsg} className="type-msg" type="text" placeholder="Type a message" value={text}/><button className="send-btn" type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
