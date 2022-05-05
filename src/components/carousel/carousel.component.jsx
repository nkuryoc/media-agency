import React from 'react';
import './carousel.style.css';


const CarouselDiv = () => (
    <>
        <div className="grid-container top-carousel">
            <div className='grid-container grid-main'>
                <div className="grid-x grid-padding-x carousel-outer">
                    <div className="large-6 medium-6 cell">
                        <h2 className='main-header'>Get a Premium<br />Website Hosting Plan.<br />Go Online</h2>
                        <p className='carousel-sub-header'>We just created a new design layout for Host Ocean - VPS
                             Hosting Landing Page If you like please hit the like button and share!Do you
                             want to have a design like this for you?</p>

                        <button type="button" className="button">Try 7 Days Free</button>
                    </div>
                    <div className="large-6 medium-6 cell">
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default CarouselDiv;