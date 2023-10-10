import React from 'react';

const Pricing = () => {
    return (
        <>
            <div className='pricing'>
                <div className='pages-text'>
                    {/* <p className='main-tatile'>Our  Solutions</p> */}
                    <h1>Our Pricing Plan</h1>
                    <div className='line1'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='pricing-btn'>
                    <button className='pri-btn' type='submit'>Monthly Plan</button>
                    <button className='pri-btn1' type='submit'>Yearly Plan</button>
                </div>
                <div className='pricing-main'>

                    <div className='pricing-card'>
                        <div className='pri-msg' >
                            <h2>Free</h2>
                            <p>Get your business up <br />and running</p>
                            <h3>$0<span>/y</span></h3>
                            <button type='submit' className="btn3">Get Start Free</button>
                        </div>
                        <div className='pri-list'>
                            <p> <a><i class="fa-solid fa-check"></i>   Drag & Drop Builder </a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Lead Generation & Sales</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Boot & Digital Assistants</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Customer Service</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Up to 1000 Subscribers</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Unlimited Broadcasts</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Landing Pages & Web Widgets</a> </p>
                        </div>
                    </div>
                    <div className='pricing-card'>
                        <div className='pri-msg' >
                            <h2>Pro</h2>
                            <p>Get your business up <br />and running</p>
                            <h3>$249<span>/y</span></h3>
                            <button type='submit' className="btn3">Get Start Free</button>
                        </div>
                        <div className='pri-list'>
                            <p> <a><i class="fa-solid fa-check"></i>   Drag & Drop Builder </a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Lead Generation & Sales</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Boot & Digital Assistants</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Customer Service</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Up to 1000 Subscribers</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Unlimited Broadcasts</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Landing Pages & Web Widgets</a> </p>
                        </div>
                    </div>
                    <div className='pricing-card'>
                        <div className='pri-msg' >
                            <h2>Premium</h2>
                            <p>Get your business up <br />and running</p>
                            <h3>$279<span>/y</span></h3>
                            <button type='submit' className="btn3">Get Start Free</button>
                        </div>
                        <div className='pri-list'>
                            <p> <a><i class="fa-solid fa-check"></i>   Drag & Drop Builder </a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Lead Generation & Sales</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Boot & Digital Assistants</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Customer Service</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Up to 1000 Subscribers</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Unlimited Broadcasts</a></p>
                            <p> <a><i class="fa-solid fa-check"></i>   Landing Pages & Web Widgets</a> </p>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Pricing;
