import React from 'react';

const Pages = () => {
    return (
        <>
            {/* <h1>pages component</h1> */}
            <div className='pages'>
                <div className='pages-text'>
                    <p className='main-tatile'>What We Offer</p>
                    <h1>Our Featured Solutions</h1>
                    <div className='line'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className='main'>
                    <div className='page-card'>
                        <img src='https://startp-next.envytheme.com/images/icon4.png' alt='card1' />
                        <div className='pages-cardtext'>
                            <h2>Robotic Automation</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            <button type='ssubmit' className="btn1">Learn More</button>
                        </div>
                    </div>
                    <div className='page-card'>
                        <img src='https://startp-next.envytheme.com/images/icon5.png' alt='card2' />
                        <div className='pages-cardtext'>
                            <h2>Cognitive Automation</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            <button type='ssubmit' className="btn1">Learn More</button>
                        </div>
                    </div>
                    <div className='page-card'>
                        <img src='https://startp-next.envytheme.com/images/icon6.png' alt='card3' />
                        <div className='pages-cardtext'>
                            <h2>Cognitive Engagement</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            <button type='ssubmit' className="btn1">Learn More</button>
                        </div>
                    </div>
                    <div className='page-card'>
                        <img src='https://startp-next.envytheme.com/images/icon7.png' alt='card4' />
                        <div className='pages-cardtext'>
                            <h2>Security & Surveillance</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            <button type='ssubmit' className="btn1">Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pages;
