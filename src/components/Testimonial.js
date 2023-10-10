import React from 'react'

const Testimonial = () => {
    return (
        <>
            <div className='Feedback'>
                <div className='pages-text'>
                    <p className='main-tatile'>Testimonial</p>
                    <h1>Our Clients Feedback</h1>
                    <div className='line1'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='feedback-card'>
                    <div className='feed-img'>
                        <img src='https://startp-next.envytheme.com/images/client-image/client1.jpg' alt='clintimg' />
                        <h5>Sarah Taylor</h5>
                        <h6>CEO at Envato</h6>
                    </div>
                    <div className='feed-text'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. </p>
                        <a href='#'><i class="fa-regular fa-star"></i></a>
                        <a href='#'><i class="fa-regular fa-star"></i></a>
                        <a href='#'><i class="fa-regular fa-star"></i></a>
                        <a href='#'><i class="fa-regular fa-star"></i></a>
                        <a href='#'><i class="fa-regular fa-star"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;
