import React from 'react';
import Data from '../../events.json';
import calendar from '../../assets/svg/calendar.svg';
import clock from '../../assets/svg/clock.svg';
import building from '../../assets/svg/building.svg';
import locationPin from '../../assets/svg/location-pin.svg';

const EventsList = () => {
  return (
    <div>
      {Data.events.map((event) => {
        return (
          <div className='event-container' key={event.id}>
            <div className='event-image'>
              <img src={event.eventImage} alt='Event'></img>
            </div>
            <div className='event-description'>
              <header>
                <h3>{event.title}</h3>
              </header>
              <p>{event.description.substr(0, 65) + '...'}</p>
            </div>
            <div className='event-details'>
              <div><img className='icon' src={calendar} alt='calendar icon' /><h4>Aug 29, 2020</h4></div>
              <div><img className='icon' src={clock} alt='calendar icon' /><h4>9am - 10am</h4></div>
              <div><img className='icon' src={building} alt='calendar icon' /><h4>{event.eventContact.name}</h4></div>
              <div><img className='icon' src={locationPin} alt='calendar icon' /><h4>{event.eventContact.address}</h4></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventsList
