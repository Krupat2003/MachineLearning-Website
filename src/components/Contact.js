import React from 'react';

const Contact = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "5%" }}>Contact Us</h1>
            <div className='contact'>
                <div className='cont-card'>
                    <a href='#'><i class="fa-solid fa-envelope"></i></a>
                    <h2>Mail Here</h2>
                    <h4>admin@startp.com</h4>
                    <h4>info@startp.com</h4>
                </div>
                <div className='cont-card'>
                    <a href='#'><i class="fa-solid fa-location-dot"></i></a>
                    <h2>Mail Here</h2>
                    <h4>27 Division St, New York, NY 10002, United</h4>
                    <h4>States of America</h4>
                </div>
                <div className='cont-card'>
                    <a href='#'><i class="fa-solid fa-phone"></i></a>
                    <h2>Mail Here</h2>
                    <h4>+123 456 7890</h4>
                    <h4>+241 452 4526</h4>
                </div>
            </div>
            <div cont-main>
                <div className='cont-text'>
                    <h1>Get In Touch With Us</h1>
                    <div className='line'></div>
                    <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                </div>
                <div className='cont-main'>
                    <div className='cont-img'>
                        <img src='https://startp-next.envytheme.com/images/contact-img.png' alt='' />
                    </div>
                    <div className='cont-form'>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Your Email Address" />
                        </div>
                        <div class="mb-3">
                            <input type="tel" class="form-control" id="exampleFormControlInput5" placeholder="Enter Your Number" />
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Your Subject" />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="3" placeholder='Your Message'></textarea>
                        </div>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                By checking this, you agree to our <span>Terms</span> and <span>Privacy policy.</span>
                            </label>
                        </div>
                        <button type='ssubmit' className="btn2">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
