import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const PhotosSectionHome = () => {
  return (
    <section className='photos-section'>
      <header>
        <h2>Photos</h2>
      </header>
      <div className='carousel'>
        <Carousel controls={false} indicators={false} interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_1.jpeg'
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_2.jpeg'
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_3.jpeg'
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_4.jpeg'
              alt="Fourth slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_5.jpeg'
              alt="Fifth slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_6.jpeg'
              alt="Sixth slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_7.jpeg'
              alt="Seventh slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='images/hp_photos_8.jpeg'
              alt="Eighth slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default PhotosSectionHome