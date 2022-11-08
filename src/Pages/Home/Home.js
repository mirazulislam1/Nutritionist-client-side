import React from 'react';
import Himself from '../Himself/Himself';
import MyServices from '../MyService/MyServices';
import ServiceReview from '../ServiceReview/ServiceReview';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Himself></Himself>
            <MyServices></MyServices>
            <ServiceReview></ServiceReview>
        </div>
    );
};

export default Home;