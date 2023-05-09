import React from 'react';
import {SiLandrover} from 'react-icons/si';
import {FaLinkedinIn,FaTiktok} from 'react-icons/fa';
import '../Stylling/MakePay.css';
function Logos(props) {
    return (
        <div className='Logos-main-div'>
            <SiLandrover className='logo-icons'/>
           
            <span>AVENGERS</span>
            <p>Etsy</p>
            <FaLinkedinIn className='logo-icons'/>
            <FaTiktok className='logo-icons'/>
            
        </div>
    );
}

export default Logos;