import React from 'react';

import './Stage.css';
import data from './data';

function Stage() {
  let stageParticipants = [];

  data.participants.forEach((participant) => {
    if (participant.onStage) {
      stageParticipants.push(
        <div className="stage-participant" key={participant.id}>
          <div className="name">
            {participant.name}
            <i className="fas fa-volume-up"></i>
            <i className="fas fa-search"></i>
            <div className="volume"></div>
          </div>
          <img src={participant.avatar} alt={participant.name + ' avatar'} />
          <div className="flex-fix"></div>
        </div>
      );
    }
  });

  return (
    <section className='stage'>
      {stageParticipants}
    </section>
  );
}

export default Stage;
