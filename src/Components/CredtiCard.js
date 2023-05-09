import React from 'react';
import '../Stylling/MakePay.css';
import '../Stylling/Credit-smart.css';
import tablet from '../images/tablet.png';
import TextParag from './TextParag';
import SmartMobile from "./SmartMobile";
import Safe from "./Safe";
import Tinybg from './Tinybg';
function CredtiCard(props) {
    return (
        <section className='section-credit'>
        <div className="container py-5">
            <div className="row d-flex justify-content-center "  >

                <div className="row g-2">
                    <div className=" col-md-12 col-lg-6  d-md-block" style={{paddingLeft:'20%'}}>
                    <TextParag redText='CREDIT CARD' 
                   header='Payment' header2='Gets Easier'/>


                    </div>


                    <div className="col-md-12 col-lg-6  d-md-block" >
                        <img src={tablet} alt='tablet' className='tablet-img'/>
                    </div>



                </div>



            </div>
        </div>

        <SmartMobile/>
  <Safe/>
  <div className='smallbg'>
            
            </div>


    </section>

    );
}

export default CredtiCard;