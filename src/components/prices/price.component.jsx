import React from "react";
import './price.style.css';

function PriceDiv(){
    return(
        <div className="grid-y grid-padding-y">
            <div className="large-12 medium-12 cell center-position">
                <h2 className="main-header">Start trial then,<br /> Upgrade your Package.</h2>
            </div>
            <div className="large-12 medium-12 cell">
                <div className="grid-x grid-padding-x">

                    <div className="large-4 medium-4 cell">
                        <div className="card price-card">
                            <div className="card-section-one">
                                <h3 className='price-name'>Budget</h3>
                                <span className='price-caption'>Benefit your customer from different angle of the world.</span>
                            </div>
                            <div className="card-section-two">
                                <ul>
                                    <li>Up to 5 Business Email</li>
                                    <li>Up to 5GB SSD Storage</li>
                                    <li>Shared hosting</li>
                                    <li>1 Website</li>
                                </ul>
                            </div>
                            <div className="card-section-three">
                                <button type="button" className="button expanded">Select a Plan</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PriceDiv;