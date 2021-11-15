import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import playBtn from '../assets/play_btn.svg';
import VideoModal from '../components/VideoModal';

const Hero = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
            <button variant="primary" onClick={() => setModalShow(true)}>
              <img src={playBtn} alt='play button'></img>
            </button>
            <VideoModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </section>
      </div>

    </div>
  )
}

export default Hero