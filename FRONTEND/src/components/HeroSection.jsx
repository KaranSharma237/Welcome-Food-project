import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
    return (
        <section className='heroSection' id="heroSection">
            <Navbar />

            <div className="container">
                <div className="banner">
                    <div className="largebox">
                        <h1 className='title'>WELCOME</h1>
                    </div>
                    <div className="combined_boxes">
                        <div className="imageBox">
                            <img src="./hero1.png" alt="hero1" className="smallImage" />
                        </div>
                        <div className="textAndLogo">
                            <h1 className="title">Food</h1>
                            <h1 className="title dishes_title">FOOD</h1>
                            <img src="/threelines.svg" alt="three" className="smallImage" />
                        </div>
                        <img src="/logo.svg" alt="not available" className="logo smallImage" />
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="imageBox">
                    <img src="/hero2.png" alt="hero2" className="smallImage" />
                </div>
              <center> <h1 className="title dishes_title">Welcome To Our Website...</h1></center>  
            </div>
        </section>
    );
}

export default HeroSection;
