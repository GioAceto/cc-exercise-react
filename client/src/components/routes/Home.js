import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/styles.scss';
import NavBar from '../NavBar';
import Hero from '../Hero';
import millerMap from '../../assets/miller_map.png';
import ScheduleSectionHome from '../ScheduleSectionHome';
import ShareSectionHome from '../ShareSectionHome';
import PhotosSectionHome from '../PhotosSectionHome';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className='content-section'>
        <header>
          <h2>Let the Celebration Begin.</h2>
        </header>
        <main className='main-content'>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Modi maxime dolores neque, labore quaerat eligendi eveniet
              id iure, odio ad accusamus molestiae officiis? Delectus
              sunt sequi dolores ab sapiente tenetur perferendis eaque
              voluptate unde quis assumenda possimus maxime eos animi
              nam corporis autem velit et, dolor a voluptas quia ex
              cumque. Ut aliquam fuga porro aspernatur sapiente
              voluptatibus eaque in odio, repudiandae deleniti libero,
              voluptatum reprehenderit impedit. Harum vero quod, nam
              totam nobis, in cumque provident impedit quos eveniet
              corrupti dicta odio natus hic.
            </p>
          </article>
          <img src={millerMap} alt='miller library map'></img>
        </main>
      </section>
      <ScheduleSectionHome />
      <ShareSectionHome />
      <PhotosSectionHome />
      <Footer />
    </div>
  )
};

export default Home