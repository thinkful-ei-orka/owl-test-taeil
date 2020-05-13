import React from 'react';

import './Chat.css';
import data from './data';

function Chat() {
  let chatEvents = [];

  data.chatEvents.forEach((chatEvent, index) => {
    let participant = data.participants.filter((participant) => participant.id === chatEvent.participantId)[0];
    switch (chatEvent.type) {
      case 'message':
        let time = new Date(chatEvent.time);
        let hh = time.getHours();
        let m = time.getMinutes();
        let ampm = 'AM';
        if (hh >= 12) {
          hh = hh - 12;
          ampm = "PM";
        }
        if (m.toString().length === 1) {
          m = '0' + m.toString();
        }
        chatEvents.push(
          <div className='message' key={index}>
            <img src={participant.avatar} alt={participant.name + ' avatar'} />
            <div>
              <h6>{participant.name} <span className="time">{hh + ':' + m + ' ' + ampm}</span></h6>
              <div>{chatEvent.message}</div>
            </div>
          </div>
        );
        break;
      case 'thumbs-up':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> gave a thumbs up <i className="far fa-thumbs-up"></i></div>);
        break;
      case 'thumbs-down':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> gave a thumbs down <i className="far fa-thumbs-down"></i></div>);
        break;
      case 'raise-hand':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> raised their hand <i className="far fa-hand-paper"></i></div>);
        break;
      case 'clap':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> clapped <i className="fas fa-hands-wash"></i></div>);
        break;
      case 'join':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> joined</div>);
        break;
      case 'leave':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> left</div>);
        break;
      case 'join-stage':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> joined the stage</div>);
        break;
      case 'leave-stage':
        chatEvents.push(<div className="chat-action" key={index}><strong>{participant.name}</strong> left the stage</div>);
        break;
      default:
        break;
    }
  });

  return (
    <section className='chat'>
      <div className="chat-log">
      {chatEvents}
      </div>
      <div className="chat-input"><input type="text" placeholder="Chat"></input></div>
    </section>
  );
}

export default Chat;
