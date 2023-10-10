import React from 'react';

const About = () => {
  return (
    <>
      {/* <h1>about as componentF</h1> */}
      <div className='about' >
        <div className='abt-img'>
          <img src='https://startp-next.envytheme.com/images/about4.png' alt='abtimg' />
        </div>

        <div className='abt-text'>
          <p className='main-tatile1'>About Us</p>
          <h1>Engaging New Audiences Through Smart Approach</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           <p> Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.Donec vitae sapien ut libero venenatis faucibus tempus.<p/>
          </p>
          <button type='ssubmit' className="btn2">Discover More</button>
        </div>

      </div>
    </>
  )
}

export default About;
