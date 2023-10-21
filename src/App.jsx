import React from 'react';
import NavBar from './components/navbar';
/*import 'bootstrap/dist/css/bootstrap.min.css'; */
import './App.css'
import bannerImg from './assets/bannerImg.png'
import featureImg from './assets/featureImg.png'
import Features from './components/features';
import Arrow from './assets/rightArr.png'
import quote from './assets/quote.png'
import Contact from './components/contact';
import playBtn from './assets/vedioImg.png'

function App() {

  return (
    <div className="App">
      <div className="banner">
        <NavBar />
        <div className="banner-div">
          <div className="banner-txt-div">
            <h2>Reach your -<br /> audience & convert<br />your leads</h2>
            <p>Get your customers with SEO, rank your business with <br /> email marketing, build sales leads</p>
            <div className='banner-btns'>
              <span className="btn">Get Started</span>
              <div className="btn outline-btn banner-btn-1 ">
                <img src={playBtn} alt="play-btn" />
                <span>Watch Demo</span>
                </div>
            </div>
          </div>
          <div className="banner-img-div">
            <img src={bannerImg} alt="Banner-image" className='banner-img' />
          </div>
        </div>
      </div>
      <div className="app-feature-div">
        <div className='features-div'>
          <Features
            head1='OUR FEATURES'
            head2='Know your audience'
            head3='and boost sales'
          />
          <div className="features-div-2">
            <p className='h-fit' id='feature-para-width-80'>Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails.</p>
          </div>
        </div>
        <div className="app-feature-div-1">
          <div className="app-feature-div-txt">
            <h2>Save precious time with automation</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus.</p>
            <div className='feature-btn'>
              <span>Learn More</span>
              <img src={Arrow} alt="right-arrow" className='right-arrow' />
            </div>
          </div>
          <div className="app-feature-div-img">
            <img src={featureImg} alt="feature-img" className='feature-img' />
          </div>
        </div>
      </div>
      <div className='features-div testimonial' >
        <Features
          head1='OUR HAPPY CUSTOMERS'
          head2='What our customers '
          head3='say about us'
        />
        <div className="features-div-2 testimonial-div">
          <img src={quote} alt="quotes" />
          <div className="testimonial-details">
            <p className='h-fit' id='feature-para-width-40'>Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque lacus. Faucibus tincidunt commodo mi.</p>
            <div className="testimoni-name">
              <h2>Jane Doe</h2>
              <h3>Product Specialist, Lorem Co.</h3>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  );
}

export default App;
