import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowAltCircleRight, faLocation, faPhone} from '@fortawesome/free-solid-svg-icons'
import icon from '../../Images/navbar/navbar-icon.png'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-10 rounded-xl">
            <div>
                    <img className='h-20 flex ' src={icon} alt="" />
                    <p className='text-4xl font-bold'>Nutritionist</p>
                <p>The Midwest's premier out-patient center for treatment <br /> of eating disorders. Nutrition and Dietitian services, <br /> in-person and via Telehealth. Most Insurance Accepted.</p>
                <div className='flex'>
                    <span className='text-4xl p-2 text-success'><FaFacebook></FaFacebook></span>
                    <span className='text-4xl p-2 text-success'><FaInstagram></FaInstagram></span>
                    <span className='text-4xl p-2 text-success'><FaTwitter></FaTwitter></span>
                    <span className='text-4xl p-2 text-success'><FaYoutube></FaYoutube></span>
                </div>
               
            </div>
            <div className='text-2xl'>
                <span className="footer-title text-4xl text-success">Explore</span>
                <Link className="link link-hover"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Home</Link>
                <Link className="link link-hover mt-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Blog</Link>
                <Link className="link link-hover mt-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Clients</Link>
                <Link className="link link-hover mt-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Contact Us</Link>
            </div>
            <div>
                <span className="footer-title text-success text-3xl">Contact Info</span>
                <span className="link link-hover text-success"><FontAwesomeIcon icon={faLocation} /> Our location:</span>
                <p>213, 5/4A W Agargaon</p>
                <span className="link link-hover text-success mt-4"><FontAwesomeIcon icon={faPhone} />  Phones:</span>
                <p>+02145-2452-25</p>
                <p>+52125-7442-50</p>
            </div>
        </footer>
    );
};

export default Footer;