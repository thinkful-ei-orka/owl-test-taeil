import React from 'react';

import './List.css';
import data from './data';

function List() {
  let sessionParticipants = [];
  let leftParcipants = [];

  data.participants.forEach((participant) => {
    let html =
      <div className={'participant session-' + participant.inSession + ' stage-' + participant.onStage} key={participant.id}>
        <img src={participant.avatar} alt={participant.name + ' avatar'} />
        <div>
          <h6>{participant.name}</h6>
          <div>
            <span className="status"></span>
            <span className="on-stage">on stage</span>
            <span className="off-stage">off stage</span>
            <span className="boot"> • <a href="#">Boot</a></span>
          </div>
        </div>
      </div>;


    if (participant.inSession) {
      sessionParticipants.push(html);
    } else {
      leftParcipants.push(html);
    }
  });

  return (
    <section className='list'>
      {sessionParticipants}
      {leftParcipants}
    </section>
  );
}

export default List;
