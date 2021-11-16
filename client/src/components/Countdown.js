import React from 'react'

const Countdown = () => {
  return (
    <div className='countdown-container'>
      <div className='text-box'>
        <h2>May 22 - 24, 2022</h2>
      </div>
      <div className='timer-container'>
        <div className='timer-box'>
          <p>320</p>
          <p>days</p>
        </div>
        <div className='timer-box'>
          <p>10</p>
          <p>hours</p>
        </div>
        <div className='timer-box'>
          <p>20</p>
          <p>minutes</p>
        </div>
        <div className='timer-box'>
          <p>18</p>
          <p>seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Countdown
