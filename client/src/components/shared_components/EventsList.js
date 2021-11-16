import React from 'react';
import Data from '../../events.json';

const EventsList = () => {
  return (
    <div>
      {Data.events.map((event) => {
        return (
          <div className='event-container'>
            <div className='event-image'>
            </div>
            <div className='event-description'>
              <header>
                <h3>{event.title}</h3>
                <p>{event.description.substr(0, 65) + '...'}</p>
              </header>
            </div>
            <div className='event-details'>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventsList
