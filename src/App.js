import {useSelector, useDispatch} from "react-redux";
import React, {useState, useEffect} from 'react';

import './App.css';
import {mohitMsg} from './actions';

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  let messages = state.mohit;
  const [text, settext] = useState();
  const [chatDisplay, setChatDisplay] = useState("block");
  const [showBackButton, setShowBackButton] = useState(false);
  const [showLeftBar, setShowLeftBar] = useState(true);
  const [showChatting, setShowChatting] = useState(true);

  console.log(window.innerWidth);
  useEffect(() => {
    if(window.innerWidth < 450){
      setChatDisplay("none");
    }
  }, [])

  window.addEventListener('resize', function () {
    if(window.innerWidth < 450){
      setChatDisplay("none");
    }else{
      setChatDisplay('block');
    }
  });

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

  function removeChatting(params) {
    if(window.innerWidth < 450){
      setShowLeftBar(false);
      setShowBackButton(true);
      setShowChatting(true);
      setChatDisplay('block')
    }
  }

  function showChatName() {
    setShowLeftBar(true);
    setShowBackButton(false);
    setShowChatting(false);
  }

  return (
    <div className="App">
      <div className="body-container">
        {showLeftBar ? 
        <div className="left-aside-bar">
          <h1 className="text-center">Chats</h1>
          <p onClick={removeChatting}>Mohit</p>
        </div> : null}        
        {showBackButton ? <button className="back-btn" onClick={showChatName}>Back</button> : null}  
        {showChatting ?       
        <div style={{display: chatDisplay}} className="main-container">
          <ul className="msg-list">
            {messages.map((msg, index) => (<li className="msg" key={index}>{msg}</li>))}
          </ul>
          <form onSubmit={addMessages}>
            <input name="message" onChange={setTextMsg} className="type-msg" type="text" placeholder="Type a message" value={text}/>
            <input className="send-btn" type="submit" value="Send"/>
          </form>
        </div> : null}
      </div>
    </div>
  );
}

export default App;
