import React from 'react';
import '../Stylling/PayFaster.css';
import pcimage from '../images/screen1.png';
function Image(props) {
    return (
        
            <div  id='PayFast-div-img'>
                            <img src={pcimage}
                                alt="image1" className="img-fluid Pay-fast-Image1" />
                        </div>
        
    );
}

export default Image;