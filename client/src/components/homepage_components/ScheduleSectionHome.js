import React from 'react';
import EventsList from "../shared_components/EventsList";

const ScheduleSectionHome = () => {
  return (
    <section className='schedule-section'>
      <header>
        <h2>Schedule</h2>
        <EventsList />
      </header>
    </section>
  )
}

export default ScheduleSectionHome
