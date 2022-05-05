import React from "react";
import './callout.style.css';

function CalloutDiv(){
    return(
        <div className="grid-x grid-padding-x">
            <div className="large-12 medium-12 cell center-position">
                <div className="card callout-card theme-bg1 theme-tx3">
                    <div className="card-section">
                        <h3 className='price-name'>We create an easy way to share hosting plan, and make it cheap.</h3>
                        <span className='price-caption'>Benefit your customer from different angle of the world.</span>
                        <div classname="button-call">
                            <button type="button" className="button">Select a Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalloutDiv;