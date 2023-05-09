import React from 'react';
import TextParag from './TextParag';
import '../Stylling/Safe-Customer.css';
import safe1 from '../images/safe1.jpg';
import safe2 from '../images/safe2.jpg';
import safe3 from '../images/safe3.jpg';
import safe4 from '../images/safe4.jpg';
import safe5 from '../images/safe5.jpg';
import safe6 from '../images/safe6.jpg';
import safe7 from '../images/safe7.jpg';
import safe8 from '../images/safe8.jpg';
import safe9 from '../images/safe9.jpg';
import safe10 from '../images/safe10.jpg';

function Safe(props) {
    return (
        <>
        <section className='safe-section'style={{}}>
                        <div className='Safe-Title'>
                        <TextParag redText='SECURE TRANSACTION' 
                        header='Safe Yours' header2='Savings'/>
              </div>

                                    <div className="safe-main-div">
     <img src={safe1} alt='safe'/>
     
                            
                            <img src={safe2} alt='safe'/>
                            <img src={safe3} alt='safe'/>
                            <img src={safe4} alt='safe'/>
                            <img src={safe5} alt='safe' />
                            <img src={safe6} alt='safe'/>
                            <img src={safe7} alt='safe'/>
                            <img src={safe8} alt='safe'/>
                            <img src={safe9} alt='safe'/>
                            <img src={safe10} alt='safe'/>   
                         </div>


             
     
      
     
    </section>
     
                        </>
    );
}

export default Safe;