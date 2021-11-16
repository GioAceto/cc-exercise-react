import React from 'react';
import '../../styles/styles.scss';
import NavBar from '../homepage_components/NavBar';
import Hero from '../homepage_components/Hero';
import ScheduleSectionHome from '../homepage_components/ScheduleSectionHome';
import ShareSectionHome from '../homepage_components/ShareSectionHome';
import PhotosSectionHome from '../homepage_components/PhotosSectionHome';
import Footer from '../shared_components/Footer';
import FeatureSectionHome from '../homepage_components/FeatureSectionHome';

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