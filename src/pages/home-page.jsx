import React from 'react';
import CarouselDiv from '../components/carousel/carousel.component';
import PriceDiv from '../components/prices/price.component';
import CalloutDiv from '../components/callout/callout.component';

const HomeDesign = () => (
    <>
        <CarouselDiv />
        <div className="grid-container grid-main">
            <PriceDiv />
            <CalloutDiv />
        </div>
    </>
)

export default HomeDesign;