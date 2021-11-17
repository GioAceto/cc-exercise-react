import fb from '../../assets/svg/fb.svg';
import twit from '../../assets/svg/twit.svg';
import insta from '../../assets/svg/insta.svg';


const ShareSectionHome = () => {
  return (
    <section className='share-section'>
      <header>
        <h2>Share</h2>
      </header>
      <button className='load-more-btn'>load more</button>
      <h3>@colbycollege</h3>
      <ul class='social-container'>
        <li><a href='https://www.facebook.com/colbycollege/' target='_blank' rel='noreferrer'><img src={fb} alt='facebook' /></a></li>
        <li><a href='https://www.instagram.com/colbycollege' target='_blank' rel='noreferrer'><img src={twit} alt='twitter' /></a></li>
        <li><a href='https://twitter.com/ColbyCollege' target='_blank' rel='noreferrer'><img src={insta} alt='instagram' /></a></li>
      </ul>
    </section>
  )
}

export default ShareSectionHome