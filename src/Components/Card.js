import React from 'react';

function Card(props) {
    return (
        <div className="col-md-12 col-lg-6  d-md-block" >
        <div className='card Make-card'
         style={{marginTop:props.Top,marginBottom:props.Bottom}}>

            {props.Icons}
            <h6>{props.Titel}</h6>
            <p>Now track all of your transaction easily.</p>
        </div>
    </div>
        
    );
}

export default Card;