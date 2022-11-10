import React from 'react';
import useTitle from '../../hooks/useTitle';
import Himself from '../Himself/Himself';
import MyServices from '../MyService/MyServices';
import ServiceReview from '../ServiceReview/ServiceReview';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
  useTitle('Nutritionist')
    return (
        <div>
            <Slider></Slider>
            <Himself></Himself>
            <Services></Services>
            <MyServices></MyServices>
            <ServiceReview></ServiceReview>
        </div>
    );
};

export default Home;