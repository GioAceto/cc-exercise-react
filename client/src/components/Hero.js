import React from 'react'
import playBtn from '../assets/play_btn.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='color-overlay'>
        <section className='hero-content'>
          <header>
            <h1 className='header'>commencement</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div className='hero-btn-container'>
            <button className='register-btn'>Register</button>
            <button>
              <img src={playBtn} alt='play button'></img>
            </button>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Hero