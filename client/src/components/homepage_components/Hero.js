import React from 'react'
import playBtn from '../../assets/svg/play_btn.svg';
import VideoModal from '../../components/homepage_components/VideoModal';
import Countdown from '../../components/homepage_components/Countdown';
import { Link } from "react-router-dom";

const Hero = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
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
              <Link to='/registration' className='register-btn'>Register</Link>
              <button className='play-btn' variant="primary" onClick={() => setModalShow(true)}>
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
      <Countdown />
    </>
  )
}

export default Hero