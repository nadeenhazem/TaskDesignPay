import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function TextParag(props) {
    return (
       
           <>
                <h6 className='credit-h6'>{props.redText}</h6>
                <h1 className='Credit-Title'>{props.header}<p>{props.header2} </p> </h1>
                <p className='Credit-p'>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>
                <Link className='Learn-more-btn'>Learn more  <BsArrowRight /></Link>
                </>
        
    );
}

export default TextParag;