import React from 'react';
import EventsList from "../shared_components/EventsList";

const ScheduleSectionHome = () => {
  return (
    <section className='schedule-section'>
      <header>
        <h2>Schedule</h2>
      </header>
      <EventsList />
      <button className='load-more-btn'>load more</button>
    </section>
  )
}

export default ScheduleSectionHome
