import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-main'>
                    <div className='ftr-list'>
                        <h1>StartP</h1>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur adipiscing elit, sed do</p>
                        <p>eiusmod tempor incididunt ut labore</p>
                        <p>et dolore magna aliqua. Ut enim ad</p>
                        {/* <p>minim veniam, quis nostrud</p> */}
                        <p>exercitation ullamco laboris nisi.</p>
                    </div>
                    <div className='ftr-list'>
                        <h1>Company</h1>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Services</p>
                        <p>Our Pricing</p>
                        <p>Latest News</p>
                    </div>
                    <div className='ftr-list'>
                        <h1>Support</h1>
                        <p>FAQ's</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Condition</p>
                        <p>Team</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='ftr-list'>
                        <h1>Address</h1>
                        <p><a href='#'><i class="fa-solid fa-location-dot"></i></a> 27 Division St, New York.<br/>NY 10002, USA</p>
                        <p><a href='#'><i class="fa-solid fa-envelope"></i></a>  Email: startp@gmail.com</p>
                        <p><a href='#'><i class="fa-solid fa-phone"></i></a>Phone: + (321) 984 754</p>
                        <p><a href='#'><i class="fa-brands fa-facebook"></i></a>
                            <a href='#'><i class="fa-brands fa-square-twitter"></i></a>
                            <a href='#'><i class="fa-brands fa-square-instagram"></i></a>
                            <a href='#'><i class="fa-brands fa-invision"></i></a>
                        </p>
                    </div>
                </div>
                <div className='ftr-line mt-5 mb-4'></div>
                <p className='ftr-msg mb-4'>Copyright © 2023 StartP. All rights reserved by EnvyTheme</p>

            </div>


        </>
    )
}

export default Footer;
