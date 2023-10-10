import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='blog'>
                <div className='pages-text'>
                    <h1>Our Recent Story</h1>
                    <div className='line1'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='blog-main'>
                    <div className='blog-card'>
                        <div className='blog-img'>
                            <img src='https://startp-next.envytheme.com/images/blog-image/blog9.jpg' alt='blogimg' />
                        </div>
                        <div className='blog-text'>
                            <p>Admin / August 15, 2022</p>
                            <h2>Making Peace With The Feast Or Famine Of Freelancing </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <a href='#'>Read Story <i class="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <div className='blog-img'>
                            <img src='https://startp-next.envytheme.com/images/blog-image/blog10.jpg' alt='blogimg' />
                        </div>
                        <div className='blog-text'>
                            <p>Admin / August 18, 2019</p>
                            <h2>I Used The Web For A Day On A 50 MB Budget</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <a href='#'>Read Story <i class="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <div className='blog-img'>
                            <img src='https://startp-next.envytheme.com/images/blog-image/blog11.jpg' alt='blogimg' />
                        </div>
                        <div className='blog-text'>
                            <p>Admin / August 15, 2019</p>
                            <h2>Here are the 5 most telling signs of micromanagement </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                            <a href='#'>Read Story <i class="fa-solid fa-plus"></i></a>
                        </div>
                    </div>
                </div>

                {/* Start your free trial */}
                <div className='trial'>
                    <div className='trial-img'>
                        <img src='https://startp-next.envytheme.com/images/free-trial-img.png' alt='trialimg' />
                    </div>
                    <div className='trial-text'>
                        <h1>Start your free trial</h1>

                        <div class="input-group mb-3 mt-4 trial-form">
                            <input type="text" class="form-control " placeholder="Enter your business email here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Sing Up Free</button>
                        </div>
                        <p>Test out the Machine Learning features for 14 days, no credit card required.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;
