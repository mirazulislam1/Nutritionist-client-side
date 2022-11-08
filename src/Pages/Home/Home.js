import React from 'react';
import Himself from '../Himself/Himself';
import MyServices from '../MyService/MyServices';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Himself></Himself>
            <MyServices></MyServices>
        </div>
    );
};

export default Home;