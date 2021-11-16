import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/styles.scss';
import NavBar from '../NavBar';
import Hero from '../Hero';
import ScheduleSectionHome from '../ScheduleSectionHome';
import ShareSectionHome from '../ShareSectionHome';
import PhotosSectionHome from '../PhotosSectionHome';
import Footer from '../Footer';
import FeatureSectionHome from '../FeatureSectionHome';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <FeatureSectionHome />
      <ScheduleSectionHome />
      <ShareSectionHome />
      <PhotosSectionHome />
      <Footer />
    </div>
  )
};

export default Home