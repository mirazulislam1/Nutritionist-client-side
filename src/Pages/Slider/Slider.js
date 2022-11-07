import React from 'react';
import slider1 from '../../Images/Slider/cuorsel1.jpg'
import slider2 from '../../Images/Slider/slider3.jpeg'
import slider3 from '../../Images/Slider/slider4.webp'

const Slider = () => {
    return (
        <div className="carousel w-full mt-5 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                <h1 className='text-white text-5xl font-bold text-center text-center'>Your Personal <br />
                    Nutritionist</h1>
                </div>  
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <p className='text-secondary font-'>A nutritionist is a person who advises others on matters of food and nutrition and their impacts on health. <br /> Some people specialize in particular areas, such as sports nutrition, public health, or animal nutrition, among other disciplines.</p>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                <h1 className='text-white text-5xl font-bold text-center'>Individual Diet<br />
                Plans</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <p className='text-secondary font-'>Online Diet counselling and Diet Chart with free follow up by Dietitian Farzana Ahmed. <br /> Diet chart with affordable and available food items.</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
          
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                <h1 className='text-white text-5xl font-bold text-center'>Free Nutritionist <br />
                    Consultation</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <p className='text-secondary font-'>Latest on Evidence Based Health, Nutrition & Wellness Research. No hype. Just the Science. <br /> Discover What's New in the World of Science - Mindfulness, Meditation, Fitness and More! View Posts. Subscribe To Newsletter.</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;