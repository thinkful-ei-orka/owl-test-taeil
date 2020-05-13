import React from 'react';

import List from './List';
import Chat from './Chat';
import Stage from './Stage';

function App() {
  function toggleChat() {
    document.getElementById('left-panel').classList.add('chat-active');
    document.getElementById('left-panel').classList.remove('list-active');
    document.getElementById('chat-button').classList.add('active');
    document.getElementById('list-button').classList.remove('active');
  }
  function toggleParticipants() {
    document.getElementById('left-panel').classList.add('list-active');
    document.getElementById('left-panel').classList.remove('chat-active');
    document.getElementById('list-button').classList.add('active');
    document.getElementById('chat-button').classList.remove('active');
  }

  return (
    <div>
      <main className='App'>
        <section className="left-panel list-active" id="left-panel">
          <div className="left-buttons">
            <button type="button" onClick={toggleChat} id="chat-button">Chat</button>
            <button type="button" onClick={toggleParticipants} className="active" id="list-button">Participants</button>
            <button type="button" className="icon"><i className="fas fa-cog"></i></button>
            <button type="button" className="icon"><i className="fas fa-link"></i></button>
            <button type="button" className="icon"><i className="far fa-question-circle"></i></button>
          </div>
          <List />
          <Chat />
        </section>
        <Stage />
      </main>
      <footer>
        <div>
          <button type="button" className="circle"><i className="fas fa-chevron-left"></i></button>
          <button type="button" className="hand"><i className="far fa-thumbs-up"></i></button>
          <button type="button" className="hand"><i className="far fa-thumbs-down"></i></button>
          <button type="button" className="hand"><i className="far fa-hand-paper"></i></button>
          <button type="button" className="hand"><i className="fas fa-hands-wash"></i></button>
        </div>
        <div>
          <button type="button" className="circle"><i className="fas fa-video"></i></button>
          <button type="button" className="circle"><i className="fas fa-volume-up"></i></button>
          <button type="button" className="circle"><i className="fas fa-desktop"></i></button>
          <button type="button" className="red">Leave stage</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
