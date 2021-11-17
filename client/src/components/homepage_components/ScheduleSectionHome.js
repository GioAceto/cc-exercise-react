import React from 'react';
import EventsList from "../shared_components/EventsList";
import calendar from '../../assets/svg/calendar.svg';

const ScheduleSectionHome = () => {
  return (
    <section className='schedule-section'>
      <header>
        <h2>Schedule</h2>
      </header>
      <a href='https://events.colby.edu' target='_blank' rel='noreferrer'>
        <img className='events-calendar-icon' src={calendar} alt='link to events calendar' />
      </a>
      <EventsList />
      <button className='load-more-btn'>load more</button>
    </section>
  )
}

export default ScheduleSectionHome
