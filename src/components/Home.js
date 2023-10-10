import React from 'react';
import Pages from './Pages';
import About from './About';
import Shop from './Shop';
import Pricing from './Pricing';
import Testimonial from './Testimonial';
import Blog from './Blog';

import { useHistory } from 'react-router-dom';

const Home = () => {
  let history = useHistory();
  return (
    <>
      {/* <h1>home component</h1> */}
      <div className='home' >
        <div className='home-text'>
          <h1>World’s Leading AI & <br /> Machine Learning Company</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button type='ssubmit' className="btn2">Get Started</button>
        </div>
        <div className='home-img'>
          {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls9YmnamCmkmhHOBNciIW5arx1n1Fj_J_g3b3h_jYdlTcnxJr' alt='homeimg' /> */}
          <img src='https://nwskills.org/wp-content/uploads/2021/10/callout-employers.jpg' alt='homeimg' />
        </div>
      </div>
      <Pages />
      <About />
      <Shop />

      {/* Users Expectation part start  */}
      <div className='user' >
        <div className='pages-text'>
          {/* <p className='main-tatile'>What We Offer</p> */}
          <h1>We Always Try To Understand  <br /> Users Expectation</h1>
          <div className='line'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='user-text'>
          <div className='user-card'>
            <h3>180K</h3>
            <p>Downloaded</p>
          </div>
          <div className='user-card'>
            <h3>20K</h3>
            <p>Feedback</p>
          </div>
          <div className='user-card'>
            <h3>500+</h3>
            <p>Workers</p>
          </div>
          <div className='user-card'>
            <h3>70+</h3>
            <p>Contributors</p>
          </div>
        </div>
        <div className='user-main'>
          <div className='msg'>
            <h2>Have any question about us?</h2>
            <p>Don't hesitate to contact us</p>
          </div>
          <button type='ssubmit' className="btn2"  onClick={() => {history.push("/contact")}}>Contact Us</button>
        </div>
      </div>
      {/* Users Expectation part end  */}
      <Pricing />
      <Testimonial />
      <Blog />
    </>
  )
}

export default Home;
