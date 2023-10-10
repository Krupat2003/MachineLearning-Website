import React from 'react';

const Shop = () => {
    return (
        <>
            {/* <h1>shop component</h1> */}
            <div className='services'>
                <div className='pages-text'>
                    <p className='main-tatile'>Our  Solutions</p>
                    <h1>Our Services</h1>
                    <div className='line1'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className='services-card' >
                    <div className='ser-card' >
                        <img src='https://startp-next.envytheme.com/images/services-image/service-image1.png' alt='sercard1' />
                        <div className='ser-text' >
                            <h2>IT Professionals</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='ser-card' >
                        <img src='https://startp-next.envytheme.com/images/services-image/service-image2.png' alt='sercard2' />
                        <div className='ser-text' >
                            <h2>Software Engineers</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='ser-card' >
                        <img src='https://startp-next.envytheme.com/images/services-image/service-image3.png' alt='sercard3' />
                        <div className='ser-text' >
                            <h2>Health & Manufacturing</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className='ser-card' style={{ marginTop: "30px" }} >
                        <img src='https://startp-next.envytheme.com/images/services-image/service-image4.png' alt='sercard6' />
                        <div className='ser-text' >
                            <h2>Health & Manufacturing</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='ser-card' style={{ marginTop: "30px"}} >
                        <img src='https://startp-next.envytheme.com/images/services-image/service-image5.png' alt='sercard5' />
                        <div className='ser-text' >
                            <h2>Health & Manufacturing</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='ser-card' style={{ marginTop: "30px" }} >
                        <img src='https://startp-next.envytheme.com/images/services-image/service-image6.png' alt='sercard6' />
                        <div className='ser-text' >
                            <h2>Health & Manufacturing</h2>
                            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Shop;
