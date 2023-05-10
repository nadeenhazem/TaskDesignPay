import React from 'react';
import '../Stylling/Credit.css';
import tablet from '../images/tablet.png';
import TextParag from './TextParag';
import SmartMobile from "./SmartMobile";
import Safe from "./Safe";
function CredtiCard(props) {
    return (
        <section className='section-credit'>
        <div className="container py-5">
            <div className="row  justify-content-center "  >

                <div className="row g-5">
                    <div className=" col-md-12 col-lg-6  d-md-block Credit-Text" >
                    <TextParag redText='CREDIT CARD' 
                   header='Payment' header2='Gets Easier'/>


                    </div>


                    <div className="col-md-12 col-lg-6  d-md-block " >
                        <img src={tablet} alt='tablet' className='tablet-img'/>
                    </div>



                </div>



            </div>
           
        </div>

        <SmartMobile/>
  <Safe/>
  


    </section>

    );
}

export default CredtiCard;